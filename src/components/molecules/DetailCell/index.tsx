import React, { FC, ReactElement } from 'react'
import Typography from '../../atoms/Typography'
import { DetailCard } from './DetailCell.styled'
import Spacer from '../../atoms/Spacer'
import { useTheme } from 'styled-components'

interface CellProps {
  needMargin?: boolean
  icon?: ReactElement
  title?: string
  detail?: string
}
const DetailCell: FC<CellProps> = ({ needMargin, icon, title, detail }) => {
  const { colors } = useTheme()
  return (
    <DetailCard needMargin={needMargin ?? false}>
      {icon}
      <Spacer orientation={'vertical'} size={8} />
      <Typography variant="title" weight="500" spacingBottom={4}>
        {title}
      </Typography>
      <Typography variant="title" color={colors.secondaryText}>
        {detail}
      </Typography>
    </DetailCard>
  )
}

export default DetailCell
