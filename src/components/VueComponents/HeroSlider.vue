<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
// import Stethoscope form '../assets/'
import Stethoscope from '../../assets/stethoscope.png';


const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay:6000
}

const heroContent =[
    {
    title:'<span class="">Healthcare Consulting</span>',
    description:'<span class="">Helping hospitals, NGOs, and governments improve efficiency, compliance, and patient care through strategic health solutions.</span>',
    button:'Book now',
    link:'#',
    image:'bg-[url(/Logistics/Sea.png)]' 
    },
    {
    title:'<span class="">Healthcare Auditing</span>',
    description:'<span class="">Independent audits to assess quality, safety, and compliance — from maternal reviews to full hospital evaluations.</span>',
    button:'Explore now',
    link:'#',
    image:'bg-[url(/Logistics/Transportation.png)]' 
    },
    {
    title:'<span class="">Risk Management</span>',
    description:'<span class="">Protecting patients and institutions with tailored risk assessments, safety programs, and crisis response plans.</span>',
    button:'Get quote',
    link:'#',
    image:'bg-[url(/Logistics/Rail.png)]' 
    },
    {
    title:'<span class="">Medico-Legal Consulting</span>',
    description:'<span class="">Independent expert reviews for medical disputes, incident investigations, and insurance or litigation support.</span>',
    button:'Get quote',
    link:'#',
    image:'bg-[url(/Logistics/Air-cargo.png)]' 
    },
]
</script>

<template>
    <div>
        <Carousel v-bind="carouselConfig" class='z-0'>
            <Slide v-for="(slide, k) in heroContent" :key="k">
            <div class="carousel__item relative w-full bg-linear-to-br from-[#cce4ff] ">
                <div :class='slide.image' class=" aspect-video bg-cover bg-center h-[80dvh] w-full ">          
                    <div class='max-w-6xl mx-auto flex flex-col justify-center h-full space-y-6 px-4'>
                        <h1 v-html=" slide.title " class='font-bold text-5xl '/>
                        <p v-html='slide.description' class='max-w-xl font-light'/>
                        <a href='#' class='flex items-center space-x-0.5 group'>
                            <span class='text-lg font-bold hover:underline hover:text-[#012C95]'>Learn more</span>
                            <span class='group-hover:animate-pulse  text-[#012C95]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div class='absolute z-50 bottom-0 md:-bottom-24 right-0 size-40 md:size-96 aspect-square'>
                    <img :src="Stethoscope.src" alt="Hero image"></img>
                </div>
            </div>
            </Slide>

            <template #addons>
            <Navigation class='hidden! sm:flex!'/>
            <Pagination class='text-[#012C95]!'/>
            </template>
        </Carousel>
    </div>
</template>