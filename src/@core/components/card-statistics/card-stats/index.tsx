// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types Imports
import { CardStatsProps } from 'src/@core/components/card-statistics/types'

const CardStats = (props: CardStatsProps) => {
  // ** Props
  const { title, subtitle, color, icon, stats, trend, trendNumber } = props

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Avatar variant='rounded' sx={{ width: 50, height: 50, boxShadow: 3, marginRight: 4, color: 'common.white', backgroundColor: `${color}.main` }}>
            {icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{title}</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'flex-start' }}>
              <Typography variant='h6' sx={{ mr: 2 }}>
                {stats}
              </Typography>
              <Typography
                component='sup'
                variant='caption'
                sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}
              >
                {trendNumber}
              </Typography>
              {/* <Typography variant='caption'>{subtitle}</Typography> */}
            </Box>
          </Box>
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardStats

CardStats.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
