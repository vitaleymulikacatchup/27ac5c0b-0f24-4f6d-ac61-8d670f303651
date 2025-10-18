"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/ThemeProvider";

const assetMap = [{"id":"hero-image","url":"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Red Ferrari sports car showcased at Dubai Mall, UAE, symbolizing luxury and elegance."},{"id":"about-image","url":"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Red Ferrari sports car showcased at Dubai Mall, UAE, symbolizing luxury and elegance."},{"id":"product-1-image","url":"https://images.pexels.com/photos/5195367/pexels-photo-5195367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a restored red Ferrari at an outdoor car show in Farmington, CT."},{"id":"product-2-image","url":"https://images.pexels.com/photos/30453079/pexels-photo-30453079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A striking red Ferrari 488 GTB parked in an underground garage in Mumbai."},{"id":"product-3-image","url":"https://images.pexels.com/photos/2664399/pexels-photo-2664399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A luxurious red Ferrari sports car parked in urban New York City against a backdrop of modern and vintage buildings."},{"id":"testimonial-1","url":"https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A professional Asian businesswoman sitting confidently in a modern office setting."},{"id":"testimonial-2","url":"https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman enjoying remote work at a café, using a laptop and smartphone."},{"id":"testimonial-3","url":"https://images.pexels.com/photos/7697207/pexels-photo-7697207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A barber expertly styles a client's hair in a contemporary barbershop setting."},{"id":"testimonial-4","url":"https://images.pexels.com/photos/7144209/pexels-photo-7144209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Joyful couple in their new car, holding keys in a dealership showroom, smiling warmly."}];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[{name: "Home", id: "home"}, {name: "Products", id: "products"}, {name: "Contact", id: "contact"}]}
          brandName="Ferrari Shop"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Drive Your Dream"
            description="Explore the finest collection of Ferrari cars and enter the world of speed and luxury."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "hero-image")?.alt ?? "Decorative image"}
            buttons={[{text: "Shop Now", href: "products"}]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Discover the Passion Behind Our Ferraris"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Ferraris"
            description="Explore our exclusive range of Ferrari models."
            products={[
              {id: "1", name: "Model X", price: "$300,000", imageSrc: assetMap.find(a => a.id === "product-1-image")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "product-1-image")?.alt ?? "Decorative image"},
              {id: "2", name: "Model Y", price: "$350,000", imageSrc: assetMap.find(a => a.id === "product-2-image")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "product-2-image")?.alt ?? "Decorative image"},
              {id: "3", name: "Model Z", price: "$400,000", imageSrc: assetMap.find(a => a.id === "product-3-image")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "product-3-image")?.alt ?? "Decorative image"}
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Stay in the Loop"
            description="Contact us for more information on our Ferrari models."
            inputPlaceholder="Your email"
            buttonText="Submit"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {title: "Explore", items: [{label: "Home", href: "home"}, {label: "Products", href: "products"}]},
              {title: "Support", items: [{label: "Contact", href: "contact"}, {label: "Terms of Service", href: "terms"}]}
            ]}
            copyrightText="© 2025 Ferrari Shop"
            onPrivacyClick={() => alert('Privacy clicked')}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}