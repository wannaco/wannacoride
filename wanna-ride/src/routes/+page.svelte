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

<main class="relative min-h-screen flex flex-col p-4 md:p-[18px] box-border">
	<!-- Header -->
	<header class="relative z-30 flex items-center justify-between gap-4 max-w-[1100px] w-full mx-auto mb-4 md:mb-[18px]">
		<div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/[0.62] border border-[#0b2a3a]/10 backdrop-blur-[8px] shadow-[0_12px_30px_rgba(3,35,52,0.12)]" aria-label="Wanna Ride">
			<img class="block h-[60px] md:h-[60px] w-auto object-contain" src="/logo_small.png" alt="Wanna Ride" />
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
							{copy.ctaPrimary}
						</a>
						<a class="inline-flex items-center justify-center gap-2.5 px-3.5 py-3 rounded-[14px] no-underline font-black tracking-[0.02em] transition-all duration-[120ms] select-none bg-white/55 border border-[#0b2a3a]/18 text-[#0b2a3a] hover:bg-white/75 active:translate-y-px" href={telLink}>
							{copy.ctaSecondary}
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Sand/Beach Bottom -->
		<div class="absolute left-0 right-0 bottom-0 h-[210px] md:h-[240px] pointer-events-none z-10" aria-hidden="true">
			<img 
				class="absolute -right-[18px] md:-right-[44px] -bottom-[10px] md:-bottom-[14px] h-auto select-none" 
				style="width: min(520px, 72vw); transform: scaleX(-1); filter: drop-shadow(0 18px 35px rgba(3, 35, 52, 0.16)); -webkit-user-drag: none;"
				src="/palms.png" 
				alt="" 
			/>
		</div>
	</section>
</main>

<svelte:head>
	<script type="text/javascript">
		(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://schedule.thinkcloud.dev/embed/embed.js", "init");
		Cal("init", "tour", {origin:"https://schedule.thinkcloud.dev"});
		Cal.ns.tour("floatingButton", {"calLink":"team/wanna-ride/tour","config":{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}); 
		Cal.ns.tour("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
	</script>
</svelte:head>

<!-- Footer -->
<footer class="bg-accent/5 p-4 text-center text-sm text-accent">
	<p class="m-0">
		{lang === 'en' ? 'Developed by' : 'Desarrollado por'}
		<a class="font-semibold hover:opacity-70 transition-opacity" href="https://thinkcloud.dev/" target="_blank" rel="noopener noreferrer">ThinkCloud</a>
	</p>
</footer>
