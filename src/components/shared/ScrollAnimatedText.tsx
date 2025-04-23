"use client";
import React, { useState, useEffect } from 'react';

const ScrollAnimatedText = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    // Lấy chiều cao của tài liệu và cửa sổ trình duyệt
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;

    // Tính tỷ lệ phần trăm cuộn
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    // Thêm sự kiện cuộn khi component được mount
    window.addEventListener('scroll', handleScroll);

    // Dọn dẹp sự kiện cuộn khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Tính màu sắc dựa trên tỷ lệ cuộn
  const getColor = () => {
    // Ở đây, bạn có thể thay đổi màu sắc tùy vào tỷ lệ cuộn
    const red = Math.min(255, Math.floor((scrollPercentage / 100) * 255));
    const green = 255 - red;
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold', color: getColor() }}>
      Cuộn để thay đổi màu sắc: {Math.round(scrollPercentage)}%
    </div>
  );
};

export default ScrollAnimatedText;
