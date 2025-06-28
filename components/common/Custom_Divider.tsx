import { Chip, Divider } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Custom_Divider = ({ text, sx }: { text: string, sx?: string }) => {
  const theme = useTheme()

  return (
    <>
      <div className='my-2 w-full Custom_Divider'>
        <Divider
          sx={{
            ...sx,
            '&.MuiDivider-root::before,&.MuiDivider-root::after': {
              border: `1px solid ${theme.palette.primary.main}`
            }
          }}
        >
          {text ?
            <Chip label={text ? text : ''} size='small'
              color={theme.palette.primary.main}
            />
            : null
          }
        </Divider>
      </div>
    </>
  )
}
export default Custom_Divider
