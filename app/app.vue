<template>
  <div class="pg">
    <div id="top" />
    <div class="prog" aria-hidden="true" />
    <TiltFx />
    <a class="totop" href="#top" :aria-label="$t('ui.toTop')"><AppIcon name="up" /></a>

    <AppNav />
    <main>
      <HeroSection />
      <GiantMarquee />
      <ClientsSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <TechBand />
      <VoicesSection />
      <DomainSection />
      <FaqSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
