import {Developer, FAQs, Footer, Hero, Menubar, Services, WhyUs, GetStarted} from "../sections"

const Home = () => {
  return (
    <>
    <main className="relative">
      <Menubar />

      <section className="xl:padding-l padding-b">
        <Hero />
      </section>
      <section className="xl:padding-l padding-b">
        <Services />
      </section>
      <section className="xl:padding-l padding-b bg-withPaydestal  bg_style">
        <WhyUs />
      </section>
      <section className="xl:padding-l padding-b ">
        <Developer />
      </section>
      <section className="xl:padding-l padding-b ">
        <FAQs />
      </section>
      <section className="xl:padding-l padding-b bg-footerbg bg_style">
        <GetStarted />
        <Footer />
      </section>
      

    </main>
      
    </>
  )
}

export default Home
