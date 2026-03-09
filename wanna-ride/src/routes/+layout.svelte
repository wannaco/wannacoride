<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	
	<!-- Google Analytics 4 - ADD YOUR GA4 MEASUREMENT ID -->
	<!-- Uncomment and add your GA4 ID: G-XXXXXXXXXX -->
	<!--
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-XXXXXXXXXX');
	</script>
	-->
	
	<!-- Google Search Console Verification -->
	<meta name="google-site-verification" content="IrTtJ256VxmSyc0yWy3G21JNfyYCzGhF3SAIkjWxbzo" />
	
	<!-- Facebook Pixel - ADD YOUR PIXEL ID -->
	<!-- Uncomment and add your Facebook Pixel ID -->
	<!--
	<script>
		!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window, document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', 'YOUR_PIXEL_ID_HERE');
		fbq('track', 'PageView');
	</script>
	<noscript><img height="1" width="1" style="display:none"
		src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"
	/></noscript>
	-->
	
	<!-- PostHog Analytics - ADD YOUR API KEY AND HOST -->
	<!-- Uncomment and add your PostHog API key -->
	<!--
	<script>
		!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
		posthog.init('YOUR_POSTHOG_API_KEY', {api_host: 'https://app.posthog.com'})
	</script>
	-->
</svelte:head>

<style>
	:global(html) {
		height: 100%;
	}

	:global(body) {
		min-height: 100%;
		margin: 0;
		font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
			"Apple Color Emoji", "Segoe UI Emoji";
		color: #0b2a3a;
		background: #94c9fe;
	}

	:global(a) {
		color: inherit;
	}
</style>

{@render children()}
