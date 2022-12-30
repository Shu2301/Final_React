import React from 'react'
import Story from './Story'
import styled from 'styled-components'

const Stories = () => {
  return (
    <StoriesWrapper>
        <Story 
            image="https://static2.yan.vn/YanNews/2167221/202003/wibu-la-gi-tai-sao-wibu-bi-ki-thi-4bfcdcd0.png"
            profileSrc="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            title="Nguyen Thanh Trung"
        />
        <Story 
            image="https://static2.yan.vn/YanNews/2167221/202003/wibu-la-gi-tai-sao-wibu-bi-ki-thi-4bfcdcd0.png"
            profileSrc="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            title="Nguyen Thanh Trung"
        />
        <Story 
            image="https://static2.yan.vn/YanNews/2167221/202003/wibu-la-gi-tai-sao-wibu-bi-ki-thi-4bfcdcd0.png"
            profileSrc="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            title="Nguyen Thanh Trung"
        />
    </StoriesWrapper>
  )
}

const StoriesWrapper = styled.div`
    display: flex;
`

export default Stories