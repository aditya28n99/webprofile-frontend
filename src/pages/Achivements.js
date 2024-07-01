import React from 'react';
import styled from 'styled-components';

const AchievementsContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const CertificateList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CertificateItem = styled.li`
  background-color: #f8f8f8;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CertificateTitle = styled.h2`
  font-size: 20px;
  margin: 0 0 10px;
  color: #555;
`;

const CertificateDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #777;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  background-color: #eef6ff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AchievementTitle = styled.h2`
  font-size: 20px;
  margin: 0 0 10px;
  color: #555;
`;

const AchievementDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #777;
`;

function Achivements() {
  return (
    <AchievementsContainer>
      <Title>My Achievements</Title>
      <h3>Certificates</h3>
      <CertificateList>
        <CertificateItem>
          <CertificateTitle>MERN Stack Development Certificate</CertificateTitle>
          <CertificateDescription>Completed MERN Stack Development course with distinction.</CertificateDescription>
        </CertificateItem>
        <CertificateItem>
          <CertificateTitle>Frontend Development Certificate</CertificateTitle>
          <CertificateDescription>Mastered frontend technologies like HTML, CSS, JavaScript, and React.</CertificateDescription>
        </CertificateItem>
        {/* Add more certificates here */}
      </CertificateList>
      <h3>Other Achievements</h3>
      <AchievementList>
        <AchievementItem>
          <AchievementTitle>Top Performer at Intigrow</AchievementTitle>
          <AchievementDescription>Awarded as the top performer for outstanding contributions and dedication.</AchievementDescription>
        </AchievementItem>
        <AchievementItem>
          <AchievementTitle>Completed Mechanical Engineering with Distinction</AchievementTitle>
          <AchievementDescription>Graduated with distinction in Mechanical Engineering.</AchievementDescription>
        </AchievementItem>
        {/* Add more achievements here */}
      </AchievementList>
    </AchievementsContainer>
  );
}

export default Achivements;
