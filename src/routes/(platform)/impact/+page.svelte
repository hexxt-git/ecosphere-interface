<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import { mode } from 'mode-watcher';
	import Card from '$lib/components/ui/card/card.svelte';

	$: darkMode = $mode == 'dark';

	let lineChart;
	let pieChart;
	let polarChart;
	let barChart;

	let lineChartCanvas;
	let pieChartCanvas;
	let polarChartCanvas;
	let barChartCanvas;

	function getGradient(ctx, chartArea, color, isDarkMode, opacity = 0.25) {
		const gradientBg = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
		gradientBg.addColorStop(0, isDarkMode ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)');
		const alpha = Math.round(opacity * 255)
			.toString(16)
			.padStart(2, '0');
		gradientBg.addColorStop(1, `${color}${alpha}`);
		return gradientBg;
	}

	function createCharts() {
		lineChart = new Chart(lineChartCanvas, {
			type: 'line',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
				],
				datasets: [
					{
						label: 'Trees Planted',
						data: new Array(12).fill().map((_, i) => Math.floor((i + Math.random()) * 1300)),
						borderColor: darkMode ? '#1b8b33' : '#1c9737',
						backgroundColor: function (context) {
							const chart = context.chart;
							const { ctx, chartArea } = chart;
							if (!chartArea) {
								return null;
							}
							return getGradient(
								ctx,
								chartArea,
								darkMode ? '#1b8b33' : '#1c9737',
								darkMode,
								darkMode ? 0.4 : 0.1
							);
						},
						tension: 0.4,
						fill: true,
					},
					{
						label: 'Carbon Emissions (tons)',
						data: new Array(12).fill().map((_, i) => Math.floor((12 - i + Math.random() * 2) * 1000)),
						borderColor: darkMode ? '#8b1b33' : '#97371c',
						backgroundColor: function (context) {
							const chart = context.chart;
							const { ctx, chartArea } = chart;
							if (!chartArea) {
								return null;
							}
							return getGradient(
								ctx,
								chartArea,
								darkMode ? '#8b1b33' : '#97371c',
								darkMode,
								darkMode ? 0.4 : 0.1
							);
						},
						tension: 0.4,
						fill: true,
					},
					{
						label: 'Trash Collected (tons)',
						data: new Array(12).fill().map((_, i) => Math.floor((i + Math.random() * 3) * 700)),
						borderColor: darkMode ? '#33568b' : '#3762c0',
						backgroundColor: function (context) {
							const chart = context.chart;
							const { ctx, chartArea } = chart;
							if (!chartArea) {
								return null;
							}
							return getGradient(
								ctx,
								chartArea,
								darkMode ? '#33568b' : '#3762c0',
								darkMode,
								darkMode ? 0.4 : 0.1
							);
						},
						tension: 0.4,
						fill: true,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					y: {
						beginAtZero: true,
						ticks: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
						grid: {
							color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
						},
					},
					x: {
						ticks: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
						grid: {
							color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
						},
					},
				},
				plugins: {
					legend: {
						labels: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
					},
				},
			},
		});

		// Add this line after creating the chart
		lineChartCanvas.style.minHeight = '300px';

		pieChart = new Chart(pieChartCanvas, {
			type: 'doughnut',
			data: {
				labels: ['Individual Donors', 'Corporate Sponsors', 'Grants', 'Events'],
				datasets: [
					{
						label: 'Donation Sources',
						data: [3000, 2500, 1800, 1200],
						backgroundColor: [
							'rgba(255, 99, 132, 0.8)',
							'rgba(54, 162, 235, 0.8)',
							'rgba(255, 205, 86, 0.8)',
							'rgba(75, 192, 192, 0.8)',
						],
						hoverOffset: 4,
					},
				],
			},
			options: {
				plugins: {
					legend: {
						labels: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
					},
				},
			},
		});

		polarChart = new Chart(polarChartCanvas, {
			type: 'polarArea',
			data: {
				labels: ['Tree Planting', 'Beach Cleanup', 'Recycling Drive', 'Nature Walk', 'Fundraising Gala'],
				datasets: [
					{
						label: 'Event Attendance',
						data: [120, 80, 60, 150, 90],
						backgroundColor: [
							'rgba(255, 99, 132, 0.8)',
							'rgba(75, 192, 192, 0.8)',
							'rgba(255, 205, 86, 0.8)',
							'rgba(54, 162, 235, 0.8)',
							'rgba(153, 102, 255, 0.8)',
						],
					},
				],
			},
			options: {
				scales: {
					r: {
						pointLabels: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
						grid: {
							color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
						},
						angleLines: {
							color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
						},
						ticks: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
							backdropColor: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
						},
					},
				},
				plugins: {
					legend: {
						labels: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
					},
				},
			},
		});

		barChart = new Chart(barChartCanvas, {
			type: 'bar',
			data: {
				labels: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
				datasets: [
					{
						label: 'Active Volunteers',
						data: [650, 590, 480, 510, 420],
						backgroundColor: darkMode
							? [
									'rgba(255, 99, 132, 0.8)',
									'rgba(255, 159, 64, 0.8)',
									'rgba(255, 205, 86, 0.8)',
									'rgba(75, 192, 192, 0.8)',
									'rgba(54, 162, 235, 0.8)',
								]
							: [
									'rgba(255, 99, 132, 0.6)',
									'rgba(255, 159, 64, 0.6)',
									'rgba(255, 205, 86, 0.6)',
									'rgba(75, 192, 192, 0.6)',
									'rgba(54, 162, 235, 0.6)',
								],
						borderColor: [
							'rgb(255, 99, 132)',
							'rgb(255, 159, 64)',
							'rgb(255, 205, 86)',
							'rgb(75, 192, 192)',
							'rgb(54, 162, 235)',
						],
						borderWidth: 1,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					y: {
						beginAtZero: false,
						min: 300,
						ticks: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
						grid: {
							color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
						},
					},
					x: {
						ticks: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
						grid: {
							color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
						},
					},
				},
				plugins: {
					legend: {
						labels: {
							color: darkMode ? '#e2e8f0' : '#4a5568',
						},
					},
				},
			},
		});

		barChartCanvas.style.minHeight = '300px';
	}

	onMount(() => {
		createCharts();
	});
</script>

<main class="p-10 space-y-8">
	<div>
		<h2 class="text-2xl font-bold mb-4 text-center text-primary">Environmental Impact Overview</h2>
		<Card class="p-4 bg-card/20 backdrop-blur-md">
			<canvas bind:this={lineChartCanvas}></canvas>
		</Card>
	</div>

	<div class="space-y-4">
		<h2 class="text-2xl font-bold mb-4 text-center text-primary">Funding and Engagement Metrics</h2>
		<div class="grid grid-cols-2 mobile:grid-cols-1 gap-8">
			<div>
				<h3 class="text-xl font-semibold mb-2 text-center text-foureground">Donation Sources</h3>
				<Card class="p-4 bg-card/20 backdrop-blur-md">
					<canvas bind:this={pieChartCanvas}></canvas>
				</Card>
			</div>
			<div>
				<h3 class="text-xl font-semibold mb-2 text-center text-foureground">Event Attendance</h3>
				<Card class="p-4 bg-card/20 backdrop-blur-md">
					<canvas bind:this={polarChartCanvas}></canvas>
				</Card>
			</div>
		</div>
	</div>

	<div>
		<h2 class="text-2xl font-bold mb-4 text-center text-primary">Volunteer Distribution</h2>
		<Card class="p-4 bg-card/20 backdrop-blur-md">
			<canvas bind:this={barChartCanvas}></canvas>
		</Card>
	</div>
</main>
