import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import Hero from '../../components/LandingPageComponents/Hero'
import OfferSection from '../../components/LandingPageComponents/OfferSection'
import SectionTitle from '../../components/LandingPageComponents/SectionTitle'
import OpAdd from '../../components/Op/OpAdd'
import OpListSection from '../../components/Op/OpListSection'
import { FullPage } from '../../components/VTheme/VTheme'
import publicPage from '../../hocs/publicPage'
import moment from 'moment'
import { Divider } from 'antd'
export const Landing = props => (
  <>
    <Hero />
    <FullPage>
      <Helmet>
        <title>Voluntarily</title>
      </Helmet>
      <Divider />
      <OfferSection />
      <Divider />
      <SectionTitle>
        <FormattedMessage
          id='landing.sectiontitle.oplist'
          defaultMessage='Happening Soon'
        />
      </SectionTitle>

      <OpListSection
        store={props.store}
        filter={{
          date: [moment().subtract(1, 'days'), moment().add(60, 'days')]
        }}
      />

      <OpAdd {...props} />
    </FullPage>
  </>
)
export default publicPage(Landing)
