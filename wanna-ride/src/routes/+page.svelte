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
			phone: '+503 7631-2050',
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
			phone: '+503 7631-2050',
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

<svelte:head>
	<!-- Structured Data - LocalBusiness Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "Wanna Ride",
			"description": "Safe, reliable airport transfers and custom tours in El Salvador. Punctual service to beaches, volcanoes, and cities.",
			"url": "https://wannacoride.pages.dev",
			"telephone": "+50376312050",
			"priceRange": "$$",
			"areaServed": {
				"@type": "Country",
				"name": "El Salvador"
			},
			"address": {
				"@type": "PostalAddress",
				"addressCountry": "SV",
				"addressLocality": "El Salvador"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": "13.7942",
				"longitude": "-88.8965"
			},
			"logo": "https://wannacoride.pages.dev/logo_small.png",
			"image": "https://wannacoride.pages.dev/logo_small.png",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Transportation Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Airport Transfer Service",
							"description": "Safe and reliable airport transportation in El Salvador"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Custom Tour Service",
							"description": "Private custom tours to El Salvador beaches, volcanoes, and cities"
						}
					}
				]
			}
		}
	</script>
	
	<!-- Structured Data - Organization Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Wanna Ride",
			"url": "https://wannacoride.pages.dev",
			"logo": "https://wannacoride.pages.dev/logo_small.png",
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "+50376312050",
				"contactType": "customer service",
				"areaServed": "SV",
				"availableLanguage": ["English", "Spanish"]
			}
		}
	</script>
	
	<!-- Cal.com Booking Integration -->
	<script type="text/javascript">
		(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://schedule.thinkcloud.dev/embed/embed.js", "init");
		
		// Initialize Tour booking
		Cal("init", "tour", {origin:"https://schedule.thinkcloud.dev"});
		Cal.ns.tour("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
		
		// Initialize Airport booking
		Cal("init", "airport", {origin:"https://schedule.thinkcloud.dev"});
		Cal.ns.airport("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
	</script>
</svelte:head>

<main class="relative min-h-screen flex flex-col p-4 md:p-[18px] box-border">
	<!-- Header -->
	<header class="relative z-30 flex items-center justify-between gap-4 max-w-[1100px] w-full mx-auto mb-4 md:mb-[18px]">
		<div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/[0.62] border border-[#0b2a3a]/10 backdrop-blur-[8px] shadow-[0_12px_30px_rgba(3,35,52,0.12)]" aria-label="Wanna Ride">
			<img class="block h-[60px] md:h-[60px] w-auto object-contain" src="/logo_small.png" alt="Wanna Ride - El Salvador Airport Transfers and Tours Logo" width="60" height="60" />
			<span class="font-black tracking-[0.12em] text-sm text-[#0b2a3a]">{copy.brand}</span>
			<span class="font-black tracking-[0.12em] text-sm text-[#1e64b7]">{copy.brandAccent}</span>
		</div>

		<nav class="flex gap-2 p-2 rounded-full bg-white/55 backdrop-blur-[8px] shadow-[0_12px_30px_rgba(3,35,52,0.12)]" aria-label="Language switch">
			<button 
				class="appearance-none border-0 cursor-pointer rounded-full px-3 py-2 font-extrabold tracking-[0.08em] {lang === 'en' ? 'bg-[#0b2a3a] text-white' : 'bg-transparent text-[#0b2a3a]/75'}" 
				type="button" 
				on:click={() => setLang('en')}
			>
				EN
			</button>
			<button 
				class="appearance-none border-0 cursor-pointer rounded-full px-3 py-2 font-extrabold tracking-[0.08em] {lang === 'es' ? 'bg-[#0b2a3a] text-white' : 'bg-transparent text-[#0b2a3a]/75'}" 
				type="button" 
				on:click={() => setLang('es')}
			>
				ES
			</button>
		</nav>
	</header>

	<!-- Hero Section -->
	<section class="relative z-20 flex-1 max-w-[1100px] w-full mx-auto rounded-[26px] overflow-hidden shadow-[0_30px_80px_rgba(3,35,52,0.18)]" style="background: linear-gradient(180deg, rgba(159, 208, 255, 1) 0%, rgba(159, 208, 255, 1) 55%, #f5c343 55%, #f5c343 100%);" aria-label="Hero">
		<!-- Sky Decorations -->
		<div class="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
			<!-- Sun -->
			<div class="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-95" style="background: radial-gradient(circle at 30% 30%, #fff7d1 0%, #ffd56d 42%, #ffb63e 100%); filter: blur(0.2px);"></div>
			
			<!-- Clouds -->
			<div class="absolute top-[70px] left-[6%] w-[220px] h-[70px] rounded-full bg-white/65 opacity-65" style="filter: blur(0.2px);">
				<div class="absolute w-[90px] h-[90px] left-[30px] -top-[35px] bg-white/65 rounded-full"></div>
				<div class="absolute w-[110px] h-[110px] left-[100px] -top-[55px] bg-white/65 rounded-full"></div>
			</div>
			<div class="absolute top-[140px] left-[58%] w-[220px] h-[70px] rounded-full bg-white/65 opacity-50 scale-90" style="filter: blur(0.2px);">
				<div class="absolute w-[90px] h-[90px] left-[30px] -top-[35px] bg-white/65 rounded-full"></div>
				<div class="absolute w-[110px] h-[110px] left-[100px] -top-[55px] bg-white/65 rounded-full"></div>
			</div>
		</div>

		<!-- Content -->
		<div class="relative z-10 pt-[34px] px-[26px] pb-[180px] md:pb-[220px] box-border">
			<p class="m-0 font-black tracking-[0.08em] uppercase text-[#0b2a3a]/70 text-xs">{copy.topline}</p>
			<h1 class="mt-3 mb-0 text-[clamp(34px,4.5vw,58px)] leading-[1.03] tracking-[-0.02em] text-[#0b2a3a]">{copy.heroTitle}</h1>
			<p class="mt-3.5 mb-0 text-[clamp(16px,2vw,20px)] text-[#0b2a3a]/78 max-w-[54ch]">{copy.heroSubtitle}</p>

			<!-- Cards -->
			<div class="mt-[22px] grid md:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-3.5">
				<!-- Guarantee Card -->
				<div class="rounded-[18px] p-[18px] bg-white/60 backdrop-blur-[10px] border border-white/50 shadow-[0_20px_50px_rgba(3,35,52,0.14)]" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.55) 100%);">
					<h2 class="m-0 mb-2.5 font-black tracking-[0.02em] text-base">{copy.bulletsTitle}</h2>
					<ul class="m-0 pl-[18px] grid gap-2 text-[#0b2a3a]/82 font-bold">
						{#each copy.bullets as item}
							<li>{item}</li>
						{/each}
					</ul>
					<p class="mt-[18px] mb-0 max-w-[70ch] text-[#0b2a3a]/70 font-bold text-sm">{copy.footer}</p>
				</div>

				<!-- Contact Card -->
				<div class="rounded-[18px] p-[18px] backdrop-blur-[10px] border border-white/50 shadow-[0_20px_50px_rgba(3,35,52,0.14)]" style="background: linear-gradient(180deg, rgba(30, 100, 183, 0.2) 0%, rgba(255, 255, 255, 0.6) 80%);">
					<div class="flex items-center gap-3 mb-3.5">
						<div class="w-11 h-11 rounded-xl grid place-items-center font-black tracking-[0.08em] text-white" style="background: linear-gradient(180deg, #1e64b7 0%, #0b2a3a 100%);">SV</div>
						<div>
							<div class="font-black tracking-[0.08em] uppercase text-[11px] text-[#0b2a3a]/72">{copy.contactLabel}</div>
							<div class="font-black text-[22px] tracking-[0.02em] mt-0.5">{copy.phone}</div>
						</div>
					</div>

					<div class="mt-3.5 grid grid-cols-1 gap-2.5">
						<a class="inline-flex items-center justify-center gap-2.5 px-3.5 py-3 rounded-[14px] no-underline font-black tracking-[0.02em] transition-all duration-[120ms] select-none bg-[#0b2a3a] text-white shadow-[0_18px_40px_rgba(3,35,52,0.18)] hover:bg-[#0a2230] hover:shadow-[0_20px_45px_rgba(3,35,52,0.22)] active:translate-y-px" href={waLink} target="_blank" rel="noreferrer">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
							</svg>
							{copy.ctaPrimary}
						</a>
						<a class="inline-flex items-center justify-center gap-2.5 px-3.5 py-3 rounded-[14px] no-underline font-black tracking-[0.02em] transition-all duration-[120ms] select-none bg-white/55 border border-[#0b2a3a]/18 text-[#0b2a3a] hover:bg-white/75 active:translate-y-px" href={telLink}>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
							</svg>
							{copy.ctaSecondary}
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Sand/Beach Bottom -->
		<div class="absolute left-0 right-0 bottom-0 h-[210px] md:h-[240px] z-10">
			<!-- Booking Buttons in Sand Area -->
			<div class="absolute left-4 md:left-8 bottom-4 md:bottom-8 flex flex-col gap-2.5 pointer-events-auto z-20">
				<button 
					class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-[120ms] select-none bg-[#0b2a3a] text-white shadow-[0_12px_30px_rgba(3,35,52,0.2)] hover:bg-[#0a2230] hover:shadow-[0_16px_35px_rgba(3,35,52,0.25)] active:translate-y-px cursor-pointer border-0"
					data-cal-link="team/wanna-ride/airport"
					data-cal-namespace="airport"
					data-cal-config={JSON.stringify({layout:"month_view",useSlotsViewOnSmallScreen:"true"})}
				>
					🛫 {lang === 'en' ? 'Book Airport' : 'Reservar Aeropuerto'}
				</button>
				<button 
					class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-[120ms] select-none bg-white/95 backdrop-blur-sm border border-[#0b2a3a]/20 text-[#0b2a3a] shadow-[0_12px_30px_rgba(3,35,52,0.15)] hover:bg-white hover:shadow-[0_16px_35px_rgba(3,35,52,0.2)] active:translate-y-px cursor-pointer"
					data-cal-link="team/wanna-ride/tour"
					data-cal-namespace="tour"
					data-cal-config={JSON.stringify({layout:"month_view",useSlotsViewOnSmallScreen:"true"})}
				>
					🏝️ {lang === 'en' ? 'Book Tour' : 'Reservar Tour'}
				</button>
			</div>
			
			<!-- Palms Image -->
			<img 
				class="absolute -right-[18px] md:-right-[44px] -bottom-[10px] md:-bottom-[14px] h-auto select-none pointer-events-none" 
				style="width: min(520px, 72vw); transform: scaleX(-1); filter: drop-shadow(0 18px 35px rgba(3, 35, 52, 0.16)); -webkit-user-drag: none;"
				src="/palms.png" 
				alt="Palm trees on El Salvador beach" 
				loading="lazy"
				width="520"
				height="240"
			/>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="bg-accent/5 p-4 text-center text-sm text-accent">
	<p class="m-0">
		{lang === 'en' ? 'Developed by' : 'Desarrollado por'}
		<a class="font-semibold hover:opacity-70 transition-opacity" href="https://thinkcloud.dev/" target="_blank" rel="noopener noreferrer">ThinkCloud</a>
	</p>
</footer>
