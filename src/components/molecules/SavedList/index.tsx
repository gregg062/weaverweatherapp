import React, { FC } from 'react'
import Typography from '../../atoms/Typography'
import { FlatList } from 'react-native'
import { location } from '../../../types/location'
import Spacer from '../../atoms/Spacer'
import FavoriteCard from '../Favourite'
import RecentCard from '../Recent'

interface SavedListProps {
  title: string
  data: location[]
  action: (city: string) => void
  updateSaved: (remove: boolean, city: string, state: string) => void
}
const SavedList: FC<SavedListProps> = ({
  title,
  data,
  action,
  updateSaved
}) => {
  return (
    <>
      <Typography uppercase spacingBottom={8}>
        {title}
      </Typography>
      <FlatList
        keyExtractor={(item) => title + item.city}
        data={data}
        renderItem={({ item }) => {
          if (title === 'Favorites') {
            return (
              <FavoriteCard
                city={item?.city ?? ''}
                state={item?.state ?? ''}
                action={() => {
                  action(item.city)
                }}
                update={() => {
                  updateSaved(false, item.city, item.state)
                }}
              />
            )
          } else {
            return (
              <RecentCard
                city={item?.city ?? ''}
                state={item?.state ?? ''}
                action={() => {
                  action(item.city)
                }}
                update={() => {
                  updateSaved(true, item.city, item.state)
                }}
              />
            )
          }
        }}
        ItemSeparatorComponent={() => {
          return <Spacer orientation="vertical" size={4} />
        }}
      />
    </>
  )
}

export default SavedList
