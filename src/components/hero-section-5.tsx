import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Calendar, TrendingUp } from 'lucide-react'

export function HeroSection() {
    return (
        <main className="overflow-x-hidden bg-black">
            <section className="relative min-h-screen">
                <div className="py-32 md:py-40 lg:py-48 xl:pt-72 xl:pb-32">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-2xl lg:text-left">
                            <h1 className="mt-8 text-balance text-4xl font-bold sm:text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-white drop-shadow-lg">
                                Transform Your{" "}
                                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                    Digital Presence
                                </span>
                            </h1>
                            <p className="mt-6 sm:mt-8 text-balance text-base sm:text-lg text-gray-300 drop-shadow-md">
                                Drive measurable growth with data-driven strategies, expert SEO optimization, and cutting-edge digital marketing solutions that turn clicks into customers.
                            </p>

                            <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full sm:w-auto h-12 rounded-full pl-5 pr-3 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30">
                                    <a href="#contact">
                                        <Calendar className="mr-2 h-5 w-5" />
                                        <span className="text-nowrap">Free Consultation</span>
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full sm:w-auto h-12 rounded-full px-5 text-base bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-black transition-all duration-300">
                                    <a href="#services">
                                        <TrendingUp className="mr-2 h-5 w-5" />
                                        <span className="text-nowrap">View Services</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Video Background - Fixed for Visibility */}
                    <div className="absolute inset-0 overflow-hidden rounded-none sm:rounded-3xl sm:inset-4 lg:rounded-[3rem] border-0 sm:border sm:border-blue-500/30">
                        <div className="absolute inset-0 bg-black" />
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 size-full object-cover opacity-30 mix-blend-screen"
                            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
                        />
                        {/* Subtle blue tint overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-900/30 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Logo Slider Section - Digital Marketing Tools */}
            <section className="bg-black border-t border-blue-500/20 py-12 sm:py-16 lg:py-20">
                <div className="group relative m-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:gap-0">
                        <div className="w-full text-center md:max-w-44 md:border-r md:border-blue-500/30 md:pr-6 md:text-end">
                            <p className="text-sm font-medium text-gray-400">
                                Powered by industry-leading tools
                            </p>
                        </div>
                        <div className="relative w-full py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                duration={40}
                                durationOnHover={20}
                                gap={112}>
                                {/* Google Analytics */}
                                <div className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                        src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg"
                                        alt="Google Analytics"
                                        height="20"
                                        width="auto"
                                    />
                                </div>

                                {/* Google Ads */}
                                <div className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                        src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                                        alt="Google Ads"
                                        height="20"
                                        width="auto"
                                    />
                                </div>

                                {/* Meta (Facebook) */}
                                <div className="flex">
                                    <img
                                        className="mx-auto h-6 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                        src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
                                        alt="Meta Ads"
                                        height="24"
                                        width="auto"
                                    />
                                </div>

                                {/* SEMrush */}
                                <div className="flex items-center">
                                    <span className="mx-auto text-white/70 hover:text-white transition-colors font-bold text-lg">
                                        SEMrush
                                    </span>
                                </div>

                                {/* Mailchimp */}
                                <div className="flex">
                                    <img
                                        className="mx-auto h-6 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                        src="https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg"
                                        alt="Mailchimp"
                                        height="24"
                                        width="auto"
                                    />
                                </div>

                                {/* HubSpot */}
                                <div className="flex items-center">
                                    <span className="mx-auto text-white/70 hover:text-white transition-colors font-bold text-lg">
                                        HubSpot
                                    </span>
                                </div>

                                {/* Shopify */}
                                <div className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                        src="https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg"
                                        alt="Shopify"
                                        height="20"
                                        width="auto"
                                    />
                                </div>

                                {/* WordPress */}
                                <div className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                        src="https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg"
                                        alt="WordPress"
                                        height="20"
                                        width="auto"
                                    />
                                </div>

                                {/* Ahrefs */}
                                <div className="flex items-center">
                                    <span className="mx-auto text-white/70 hover:text-white transition-colors font-bold text-lg">
                                        Ahrefs
                                    </span>
                                </div>

                                {/* Salesforce */}
                                <div className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                        src="https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg"
                                        alt="Salesforce"
                                        height="20"
                                        width="auto"
                                    />
                                </div>
                            </InfiniteSlider>

                            {/* Gradient Overlays */}
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}