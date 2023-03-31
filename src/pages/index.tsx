// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Custom Components Imports
import CardStatisticsComponent from 'src/@core/components/card-statistics/card-stats'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TrendingDishes from 'src/views/dashboard/TrendingDishes'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { BriefcaseVariant } from 'mdi-material-ui'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={6}>
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <CardStatisticsComponent
                stats='$25.6k'
                icon={<Poll sx={{ fontSize: '2.5rem' }} />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <CardStatisticsComponent
                stats='$78'
                title='Orders'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<BriefcaseVariant sx={{ fontSize: '2.5rem' }} />}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <CardStatisticsComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='Revenue'
                subtitle='Yearly Project'
                icon={<CurrencyUsd sx={{ fontSize: '2.5rem' }} />}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3} lg={3}>
              <CardStatisticsComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Customers'
                icon={<AccountOutline sx={{ fontSize: '2.5rem' }} />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TrendingDishes />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
