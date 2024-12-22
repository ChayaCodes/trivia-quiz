import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./LeaderPlayer.css";

import goldImage from "../../images/gold.png";
import silverImage from "../../images/silver.png";
import copperImage from "../../images/copper.png";
import api from "../../api/axiosSetup";
import { useParams } from "react-router-dom";



const PlayerCard = ({ position, name, points, borderColor, starColor, isMainCard, isSecondaryCard, isTextVisible }) => {
  const isTopThree = position <= 3;

  const medalImage =
    position === 1 ? goldImage : position === 2 ? silverImage : position === 3 ? copperImage : null;

  return (
    <Box
      className={`player-card ${position === 1 ? "first-place" : ""} ${isSecondaryCard ? "small-card" : ""} ${
        !isTopThree ? "non-top-three-card" : ""
      }`}
      style={{ borderColor, marginBottom: "20px" }}
    >
      {isTopThree && (
        <Box className="medal">
          <Box style={{ marginTop: "12px", marginLeft: "50px", display: "flex", alignItems: "center" }}>
            <img src={medalImage} alt="Medal" style={{ width: isMainCard ? "85px" : "75px" }} />
          </Box>
        </Box>
      )}
      {isTextVisible && (
        <>
          <Typography
            variant="h6"
            className="playerName"
            style={{ fontSize: isMainCard ? "2rem" : isSecondaryCard ? "1.8rem" : "1.3rem" }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            className="points"
            style={{ fontSize: isMainCard ? "2rem" : isSecondaryCard ? "1.8rem" : "1.3rem" }}
          >
            {points}
          </Typography>
          <Typography
            className="label"
            style={{ fontSize: isMainCard ? "1.5rem" : isSecondaryCard ? "1.2rem" : "1.0rem" }}
          >
            נקודות
          </Typography>
        </>
      )}
    </Box>
  );
};

const TopPlayers = () => {
  const [visibleText, setVisibleText] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [mockData, setMockData] = useState([]);
  const {quizId} = useParams();

  useEffect(() => {
    const data = api.get(`/admin/top_participants/${quizId}`);
    console.log(data);
    setMockData(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setVisibleText([3]);
      setTimeout(() => {
        setVisibleText([2, 3]);
        setTimeout(() => {
          setVisibleText([1, 2, 3]);
        }, 1200);
      }, 1200); 
    }, 1000);

    setTimeout(() => {
      const restPositions = Array.from({ length: 7 }, (_, i) => i + 4);
      restPositions.forEach((position, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, position]);
        }, index * 800);
      });
    }, 4500); 
  }, []);

  return (
<Box className="top-players-container" style={{ overflowX: "hidden", overflowY: "auto", padding: "20px", marginTop: "20px", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <Box className="banner" style={{ marginBottom: "20px" }}>
        <Box className="banner-content" style={{ display: "flex", alignItems: "center" }}>
          {/* <img src={winner} alt="icon or vector" className="banner-icon" style={{ width: "107px",height:"100px", marginRight: "10px" }} /> */}
          <Typography variant="h4" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#00d4ff" }}>
            השחקנים המובילים
          </Typography>
        </Box>
      </Box>

      <Box className="cards-container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px" }}>
        <PlayerCard
          position={3}
          name={mockData[2].name}
          points={mockData[2].points}
          borderColor="rgb(191, 118, 63)"
          starColor="#B87333"
          isMainCard={false}
          isSecondaryCard={true}
          isTextVisible={visibleText.includes(3)}
        />
        <PlayerCard
          position={1}
          name={mockData[0].name}
          points={mockData[0].points}
          borderColor="rgb(241,164,23)"
          starColor="#FFD700"
          isMainCard={true}
          isSecondaryCard={false}
          isTextVisible={visibleText.includes(1)}
        />
        <PlayerCard
          position={2}
          name={mockData[1].name}
          points={mockData[1].points}
          borderColor="#C0C0C0"
          starColor="#C0C0C0"
          isMainCard={false}
          isSecondaryCard={true}
          isTextVisible={visibleText.includes(2)}
        />
      </Box>

      <Box className="cards-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {visibleCards.map((position) => (
          <PlayerCard
            key={position}
            position={position}
            name={mockData[position - 1].name}
            points={mockData[position - 1].points}
            borderColor="#00d4ff"
            starColor="#00d4ff"
            isMainCard={false}
            isSecondaryCard={false}
            isTextVisible={true}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopPlayers;
