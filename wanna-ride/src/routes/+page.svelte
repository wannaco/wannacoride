<script lang="ts">
	import { onMount } from 'svelte';

	type Lang = 'en' | 'es';

	const t = {
		en: {
			topline: 'El Salvador Safe & Stress‑Free',
			brand: 'WANNA',
			brandAccent: 'RIDE',
			heroTitle: 'Airport Transfers & Custom Tours',
			heroSubtitle: 'Safe, reliable, and ready for adventure.',
			bulletsTitle: 'We guarantee',
			bullets: ['Punctuality', 'Good price', 'Safety', 'Friendliness'],
			ctaPrimary: 'Book on WhatsApp',
			ctaSecondary: 'Call now',
			contactLabel: 'Contact',
			phone: '7631-2050',
			footer: 'Private rides across El Salvador — beaches, volcanoes, cities and hidden gems.'
		},
		es: {
			topline: 'El Salvador seguro y sin estrés',
			brand: 'WANNA',
			brandAccent: 'RIDE',
			heroTitle: 'Traslados al Aeropuerto y Tours Personalizados',
			heroSubtitle: 'Seguro, confiable y listo para la aventura.',
			bulletsTitle: 'Garantizamos',
			bullets: ['Puntualidad', 'Buen precio', 'Seguridad', 'Amabilidad'],
			ctaPrimary: 'Reservar por WhatsApp',
			ctaSecondary: 'Llamar ahora',
			contactLabel: 'Contacto',
			phone: '7631-2050',
			footer: 'Rides privados por todo El Salvador — playas, volcanes, ciudades y joyas escondidas.'
		}
	} satisfies Record<Lang, any>;

	let lang: Lang = 'en';

	$: copy = t[lang];
	$: waLink = `https://wa.me/503${copy.phone.replace(/\D/g, '')}`;
	$: telLink = `tel:+503${copy.phone.replace(/\D/g, '')}`;

	function setLang(next: Lang) {
		lang = next;
		try {
			localStorage.setItem('lang', next);
		} catch {
			// ignore
		}
		if (typeof document !== 'undefined') {
			document.documentElement.lang = next;
		}
	}

	onMount(() => {
		try {
			const saved = localStorage.getItem('lang');
			if (saved === 'en' || saved === 'es') lang = saved;
		} catch {
			// ignore
		}
		document.documentElement.lang = lang;
	});
</script>

<main class="page">
	<header class="top">
		<div class="brand" aria-label="Wanna Ride">
			<img class="logo" src="/logo_small.png" alt="Wanna Ride" />
			<span class="brand__main">{copy.brand}</span>
			<span class="brand__accent">{copy.brandAccent}</span>
		</div>

		<nav class="lang" aria-label="Language switch">
			<button class:active={lang === 'en'} type="button" on:click={() => setLang('en')}>EN</button>
			<button class:active={lang === 'es'} type="button" on:click={() => setLang('es')}>ES</button>
		</nav>
	</header>

	<section class="hero" aria-label="Hero">
		<div class="sky-decor" aria-hidden="true">
			<div class="sun"></div>
			<div class="cloud c1"></div>
			<div class="cloud c2"></div>
		</div>

		<div class="content">
			<p class="topline">{copy.topline}</p>
			<h1 class="title">{copy.heroTitle}</h1>
			<p class="subtitle">{copy.heroSubtitle}</p>

			<div class="cards">
				<div class="card card--sand">
					<h2 class="cardTitle">{copy.bulletsTitle}</h2>
					<ul class="bullets">
						{#each copy.bullets as item}
							<li>{item}</li>
						{/each}
					</ul>
					<p class="footer">{copy.footer}</p>
				</div>

				<div class="card card--cta">
					<div class="ctaHeader">
						<div class="badge" aria-hidden="true">SV</div>
						<div class="ctaText">
							<div class="ctaLabel">{copy.contactLabel}</div>
							<div class="ctaPhone">{copy.phone}</div>
						</div>
					</div>

					<div class="ctaButtons">
						<a class="btn btn--primary" href={waLink} target="_blank" rel="noreferrer">{copy.ctaPrimary}</a>
						<a class="btn btn--ghost" href={telLink}>{copy.ctaSecondary}</a>
					</div>
				</div>
			</div>

			
		</div>

		<div class="sand" aria-hidden="true">
			<img class="decor decor--palms-bottom" src="/palms.png" alt="" />
		</div>
	</section>
</main>

<style>
	.page {
		position: relative;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		padding: 18px;
		box-sizing: border-box;
	}



	.top {
		position: relative;
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		max-width: 1100px;
		width: 100%;
		margin: 0 auto;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 14px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.62);
		border: 1px solid rgba(11, 42, 58, 0.1);
		backdrop-filter: blur(8px);
		box-shadow: 0 12px 30px rgba(3, 35, 52, 0.12);
	}

	.logo {
		display: block;
		height: 60px;
		width: auto;
		border-radius: 0;
		object-fit: contain;
	}

	.brand__main {
		font-weight: 900;
		letter-spacing: 0.12em;
		font-size: 14px;
	}

	.brand__accent {
		font-weight: 900;
		letter-spacing: 0.12em;
		font-size: 14px;
		color: #1e64b7;
	}

	.lang {
		display: flex;
		gap: 8px;
		padding: 8px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.55);
		backdrop-filter: blur(8px);
		box-shadow: 0 12px 30px rgba(3, 35, 52, 0.12);
	}

	.lang button {
		appearance: none;
		border: 0;
		cursor: pointer;
		border-radius: 999px;
		padding: 8px 12px;
		font-weight: 800;
		letter-spacing: 0.08em;
		background: transparent;
		color: rgba(11, 42, 58, 0.75);
	}

	.lang button.active {
		background: #0b2a3a;
		color: #ffffff;
	}

	.hero {
		position: relative;
		z-index: 2;
		flex: 1;
		max-width: 1100px;
		width: 100%;
		margin: 18px auto 0;
		border-radius: 26px;
		overflow: hidden;
		background: linear-gradient(180deg, rgba(159, 208, 255, 1) 0%, rgba(159, 208, 255, 1) 55%,
				#f5c343 55%, #f5c343 100%);
		box-shadow: 0 30px 80px rgba(3, 35, 52, 0.18);
	}

	.sky-decor {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 0;
	}

	.sun {
		position: absolute;
		top: -40px;
		right: -40px;
		width: 160px;
		height: 160px;
		border-radius: 999px;
		background: radial-gradient(circle at 30% 30%, #fff7d1 0%, #ffd56d 42%, #ffb63e 100%);
		opacity: 0.95;
		filter: blur(0.2px);
	}

	.cloud {
		position: absolute;
		width: 220px;
		height: 70px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.65);
		filter: blur(0.2px);
	}

	.cloud::before,
	.cloud::after {
		content: '';
		position: absolute;
		background: rgba(255, 255, 255, 0.65);
		border-radius: 999px;
	}

	.cloud::before {
		width: 90px;
		height: 90px;
		left: 30px;
		top: -35px;
	}

	.cloud::after {
		width: 110px;
		height: 110px;
		left: 100px;
		top: -55px;
	}

	.c1 {
		top: 70px;
		left: 6%;
		opacity: 0.65;
	}

	.c2 {
		top: 140px;
		left: 58%;
		opacity: 0.5;
		transform: scale(0.9);
	}

	.content {
		position: relative;
		z-index: 2;
		padding: 34px 26px 180px;
		box-sizing: border-box;
	}

	.topline {
		margin: 0;
		font-weight: 900;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(11, 42, 58, 0.7);
		font-size: 12px;
	}

	.title {
		margin: 12px 0 0;
		font-size: clamp(34px, 4.5vw, 58px);
		line-height: 1.03;
		letter-spacing: -0.02em;
		color: #0b2a3a;
	}

	.subtitle {
		margin: 14px 0 0;
		font-size: clamp(16px, 2vw, 20px);
		color: rgba(11, 42, 58, 0.78);
		max-width: 54ch;
	}

	.cards {
		margin-top: 22px;
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 14px;
	}

	.card {
		border-radius: 18px;
		padding: 18px;
		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.5);
		box-shadow: 0 20px 50px rgba(3, 35, 52, 0.14);
	}

	.card--sand {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.55) 100%);
	}

	.cardTitle {
		margin: 0 0 10px;
		font-weight: 900;
		letter-spacing: 0.02em;
		font-size: 16px;
	}

	.bullets {
		margin: 0;
		padding-left: 18px;
		display: grid;
		gap: 8px;
		color: rgba(11, 42, 58, 0.82);
		font-weight: 700;
	}

	.card--cta {
		background: linear-gradient(180deg, rgba(30, 100, 183, 0.2) 0%, rgba(255, 255, 255, 0.6) 80%);
	}

	.ctaHeader {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.badge {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: linear-gradient(180deg, #1e64b7 0%, #0b2a3a 100%);
		color: #fff;
		display: grid;
		place-items: center;
		font-weight: 900;
		letter-spacing: 0.08em;
	}

	.ctaLabel {
		font-weight: 900;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 11px;
		color: rgba(11, 42, 58, 0.72);
	}

	.ctaPhone {
		font-weight: 900;
		font-size: 22px;
		letter-spacing: 0.02em;
		margin-top: 2px;
	}

	.ctaButtons {
		margin-top: 14px;
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 12px 14px;
		border-radius: 14px;
		text-decoration: none;
		font-weight: 900;
		letter-spacing: 0.02em;
		transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
		user-select: none;
	}

	.btn:active {
		transform: translateY(1px);
	}

	.btn--primary {
		background: #0b2a3a;
		color: #ffffff;
		box-shadow: 0 18px 40px rgba(3, 35, 52, 0.18);
	}

	.btn--primary:hover {
		background: #0a2230;
		box-shadow: 0 20px 45px rgba(3, 35, 52, 0.22);
	}

	.btn--ghost {
		background: rgba(255, 255, 255, 0.55);
		border: 1px solid rgba(11, 42, 58, 0.18);
		color: #0b2a3a;
	}

	.btn--ghost:hover {
		background: rgba(255, 255, 255, 0.75);
	}

	.footer {
		margin: 18px 0 0;
		max-width: 70ch;
		color: rgba(11, 42, 58, 0.7);
		font-weight: 700;
		font-size: 14px;
	}

	.sand {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 210px;
		pointer-events: none;
		z-index: 1;
	}

	.decor {
		position: absolute;
		bottom: 0;
		height: auto;
		user-select: none;
		-webkit-user-drag: none;
		filter: drop-shadow(0 18px 35px rgba(3, 35, 52, 0.16));
	}

	.decor--palms-bottom {
		right: -18px;
		bottom: -10px;
		width: min(520px, 72vw);
		transform: scaleX(-1);
	}

	@media (max-width: 860px) {
		.content {
			padding-bottom: 220px;
		}

		.cards {
			grid-template-columns: 1fr;
		}

		.decor--palms-bottom {
			right: -28px;
			bottom: -12px;
			width: min(520px, 92vw);
		}
	}

	@media (max-width: 520px) {
		.page {
			padding: 12px;
		}

		.brand {
			padding: 10px 12px;
		}

		.logo {
			height: 30px;
		}

		.sand {
			height: 240px;
		}

		.decor--palms-bottom {
			right: -44px;
			bottom: -14px;
			width: min(520px, 104vw);
		}
	}
</style>
