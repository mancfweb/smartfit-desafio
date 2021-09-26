import PropTypes from 'prop-types'
import { useEffect } from 'react'

import { LocationsSearchShape } from '../utils/shapes/locations'
import { useLocations } from '../hooks/useLocations'

import Layout from '../components/_layout/Layout'
import Hero from '../components/Hero'
import Search from '../components/Search'
import LegendSection from '../components/LegendSection'
import UnitsList from '../components/UnitsList'

export default function Home({ data }) {
  const { buildInitialData } = useLocations()

  useEffect(() => buildInitialData(data), [data, buildInitialData])

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
      data: { ...data, locations: data.locations.filter((l) => l.schedules) }
    }
  }
}

Home.propTypes = {
  data: PropTypes.shape(LocationsSearchShape).isRequired
}
