// @ts-nocheck // screw this plugin im too lazy to disable it
import { derived, writable } from 'svelte/store';

import en from './en.json';
import ar from './ar.json';
import fr from './fr.json';
import sp from './sp.json'

export const translations = { en, ar, fr, sp };
export const locale = writable('unset');
export const locales = Object.keys(translations);

// function translate(locale, key, vars) {
function translate(locale, key, vars) {
	if (locale == 'unset') locale = 'en';
	// Let's throw some errors if we're trying to use keys/locales that don't exist.
	// We could improve this by using Typescript and/or fallback values.
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);
	if (!translations) throw new Error('translations not loaded');

	// Grab the translation from the translations object.
	let text = translations?.[locale]?.[key] || `Translation missing for ${locale}.${key}`;

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	// Replace any passed in variables in the translation string.
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(locale, ($locale) => (key, vars = {}) => {
	try {
		return translate($locale, key, vars);
	} catch (err) {
		console.error(err, `Translation missing for ${locale}.${key}`);
		return `Translation missing for ${locale}.${key}`;
	}
});

import Cookies from 'js-cookie';

setTimeout(() => {
	// Subscribe to locale changes to update the cookie
	locale.subscribe(($locale) => {
		if ($locale == 'unset') return;
		Cookies.set('locale', $locale, { expires: 7 }); // Expires in 7 days
	});
}, 30);

// Initialize the locale from the cookie on application load
const savedLocale = Cookies.get('locale');
if (savedLocale) {
	locale.set(savedLocale);
}
