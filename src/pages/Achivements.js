import React from 'react';
import styled from 'styled-components';

const AchievementsContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  color: aliceblue;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemContent = styled.div`
  margin-left: 15px;
`;

const ItemTitle = styled.h2`
  font-size: 20px;
  margin: 0 0 10px;
  color: #555;
`;

const ItemDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #777;
`;

const CertificateImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const InterestsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InterestItem = styled.li`
  margin: 5px 0;
  font-size: 16px;
`;

function Achievements() {
  return (
    <AchievementsContainer>
      <Title>My Achievements</Title>
      
      <SectionTitle>Certificates</SectionTitle>
      <List>
        <ListItem>
          <CertificateImage src="https://edyodalms.s3.amazonaws.com/files/certificates/Aditya_Wakale_excellence_Web_Dev_Fundamentals_Certification_10171_Qr_code___.png" alt="Web Dev Fundamentals Certificate" />
          <ItemContent>
            <ItemTitle>Web Dev Fundamentals Certificate</ItemTitle>
            <ItemDescription>Completed a comprehensive course on web development fundamentals, mastering the essentials of frontend development.</ItemDescription>
          </ItemContent>
        </ListItem>
        <ListItem>
          <CertificateImage src="https://edyodalms.s3.amazonaws.com/files/certificates/Aditya__Wakale_achivement_ReactJS_Certification_10505_Qr_code_.png" alt="ReactJS Certification" />
          <ItemContent>
            <ItemTitle>ReactJS Certification</ItemTitle>
            <ItemDescription>Earned certification in ReactJS, showcasing proficiency in building dynamic and responsive web applications.</ItemDescription>
          </ItemContent>
        </ListItem>
        <ListItem>
          <CertificateImage src="https://edyodalms.s3.amazonaws.com/files/certificates/Aditya__Wakale_achivement_Job_Focussed_Professional_Communication_Certification_16679_Qr_code_.png" alt="Professional Communication Certification" />
          <ItemContent>
            <ItemTitle>Professional Communication Certification</ItemTitle>
            <ItemDescription>Certified in job-focused professional communication, enhancing my ability to effectively collaborate and communicate in a professional setting.</ItemDescription>
          </ItemContent>
        </ListItem>
        <ListItem>
          <CertificateImage src="https://github.com/aditya28n99/virtual_images/blob/main/certificates/Aditya_Wakale_Tcs_Certificate%20of%20Achivement..png?raw=true" alt="TCSiON Career Edge Certificate" />
          <ItemContent>
            <ItemTitle>TCSiON Career Edge - Young Professionals</ItemTitle>
            <ItemDescription>Completed the TCSiON Career Edge program, gaining valuable insights and skills for career development as a young professional.</ItemDescription>
          </ItemContent>
        </ListItem>
      </List>

      <SectionTitle>Other Achievements</SectionTitle>
      <List>
        <ListItem>
          <ItemContent>
            <ItemTitle>Top Performer at Intigrow</ItemTitle>
            <ItemDescription>Awarded as the top performer for outstanding contributions and dedication at Intigrow.</ItemDescription>
          </ItemContent>
        </ListItem>
        <ListItem>
          <ItemContent>
            <ItemTitle>Completed Mechanical Engineering with Distinction</ItemTitle>
            <ItemDescription>Graduated with distinction in Mechanical Engineering from Savitribai Phule Pune University.</ItemDescription>
          </ItemContent>
        </ListItem>
        <ListItem>
          <ItemContent>
            <ItemTitle>Utkrushtha Vidyarthi Award – High School 2k14-15</ItemTitle>
            <ItemDescription>Received the Utkrushtha Vidyarthi Award for exceptional academic performance in high school.</ItemDescription>
          </ItemContent>
        </ListItem>
        <ListItem>
          <ItemContent>
            <ItemTitle>Science Fair 2014 - High School</ItemTitle>
            <ItemDescription>Participated and won accolades at the 2014 high school science fair.</ItemDescription>
          </ItemContent>
        </ListItem>
        <ListItem>
          <ItemContent>
            <ItemTitle>Winner in Sketch Competitions</ItemTitle>
            <ItemDescription>Achieved recognition as the winner in multiple sketch competitions, showcasing artistic talent.</ItemDescription>
          </ItemContent>
        </ListItem>
      </List>

      <SectionTitle>Interests</SectionTitle>
      <InterestsList>
        <InterestItem>Sketching</InterestItem>
        <InterestItem>Chess</InterestItem>
        <InterestItem>Volleyball</InterestItem>
        <InterestItem>Badminton</InterestItem>
      </InterestsList>
    </AchievementsContainer>
  );
}

export default Achievements;
