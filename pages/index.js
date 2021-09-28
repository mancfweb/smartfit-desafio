import Layout from '../components/_layout/Layout'
import Hero from '../components/Hero'
import Search from '../components/Search'
import LegendSection from '../components/LegendSection'
import UnitsList from '../components/UnitsList'

export default function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Search />
        <LegendSection />
        <UnitsList />
      </>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'
  )
  const data = await res.json()

  return {
    props: {
      data: {
        ...data,
        locations: data.locations
          .filter((l) => l.schedules)
          .map((l) => ({ ...l, available: l.opened || false }))
      }
    }
  }
}
