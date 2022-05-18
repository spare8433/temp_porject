import React, { useState } from 'react'
import styled from 'styled-components'
import { Containor, ImgBox } from '@styles/commonStyle'
import DebateCotentBox from './DebateCotentBox'
import { Header } from '@components/header'
import { NavLinkList } from '@components/NavLinkList'
import { SmallBanner } from './SmallBanner'


const IndexContanior = styled.div`
  width: 100%;
`

const DebateForumContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
`
const CategoryBox = styled.div`
  h2 {
    margin: 32px 0 24px;
    font-weight: 500;
  }
`

const ModeItem = styled.a`
  font-weight:500;
  font-size: 22px;
  margin-right: 40px;
  color:${({theme})=> theme.colors.gray_2};
`

const CategoryItem = styled.a`
  font-size: 18px;
  margin-right: 30px;
  font-weight:500;
  color:${({theme})=> theme.colors.gray_2};
`

const DetailControllBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 16px;
`
const SearchLine = styled.div`
  background-color: white;
  width: 280px;
  box-sizing: border-box;
  border: ${({theme})=> theme.colors.gray_1} 1px solid;
  border-radius:5px;
  display: flex;
  align-items: center;
  height: 32px;
  ${ImgBox}{
    /* margin: 0 8px; */
    margin-left: 10px;
  }
  input{
    color: ${({theme})=> theme.colors.gray_1};
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0 12px;
    outline: none;
    height: 100%;
    background: none;
    font-size: 16px;
    font-weight: 400;
  }
`

const AlignLine = styled.div`
  display: flex;
  align-items: center;
  select{
    padding: 4px 8px;
    color:${({theme})=> theme.colors.gray_1};
    font-weight: 400;
    outline: none;
  } 
`

const DebateForumPage = () => {
  const [debateMode,setDebateMode] = useState('전체');
  const [debateCategory,setDebateCategory] = useState('전체');

  const categoryList = ['전체','정치','경제','사회','문화','교육','과학 / it','역사','철학','스포츠','환경','기타'];
  const debateModeList = ['전체','주제토론','찬반토론','배틀토론'];
  return (
    <IndexContanior> 
      <Header></Header>
      <SmallBanner></SmallBanner>
      <DebateForumContainor width='1160'>
        <CategoryBox>
          <h2 style={{"fontSize":"28px"}}>토론 분류</h2>
          
          <NavLinkList width='100%' onClick={setDebateMode} value={debateMode} category='debateMethod' key='a'>
            {/* <ModeItem current={debateMode === '전체'}>전체</ModeItem>
            <ModeItem current={debateMode === '주제토론'}>주제토론</ModeItem>
            <ModeItem current={debateMode === '찬반토론'}>찬반토론</ModeItem>
            <ModeItem current={debateMode === '배틀토론'}>배틀토론</ModeItem> */}

            {debateModeList.map((res) => {return <ModeItem key={'debateModeItems'+res}>{res}</ModeItem>})}
          </NavLinkList>


          <h2 style={{"fontSize":"26px"}}>카테고리</h2>
            
          <NavLinkList width='100%' onClick={setDebateCategory} value={debateCategory} category='debateCategory' key='b'>
            {categoryList.map((res) => {return <CategoryItem key={'debateCategoryItems'+res}>{res}</CategoryItem>})}
          </NavLinkList>
        </CategoryBox>

        <DetailControllBox>
          <SearchLine>
            <ImgBox><img alt='돋보기' src='./img/search.png'></img></ImgBox>
            <input placeholder='검색'></input>
          </SearchLine>

          <AlignLine>
            <select>
              <option value="최신순">최신순</option>
              <option value="추천순">추천순</option>
              <option value="조회순">조회순</option>
            </select>
          </AlignLine>
        </DetailControllBox>
        

        <DebateCotentBox />

        {/* {debateMode}
        {debateCategory} */}
      </DebateForumContainor>
    </IndexContanior>
      
  )
}

export default DebateForumPage