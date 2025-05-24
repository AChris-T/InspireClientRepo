'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import blogim from '../../../public/images/blogim.png';
import { FaArrowRight } from 'react-icons/fa6';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const defaultImage = blogim;

  useEffect(() => {
    const rssFeed = 'https://medium.com/feed/@inspirecraftglobal8';
    const apiKey = 'abepzges3kmj7yvepmla2nielwjqqs9fllutsdlw';
    const apiURL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      rssFeed
    )}&api_key=${apiKey}`;

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          const articles = data.items.filter(
            (item) => item.categories.length > 0
          );
          setPosts(articles);
        }
      })
      .catch((err) => console.error('Error fetching Medium feed:', err));
  }, []);

  return (
    <div className="px-3 mt-10 space gap-5 lg:px-[121px] flex  flex-col   justify-between">
      <div className="flex justify-between ">
        <h3 className="text-2xl uppercase md:text-[48px] text-[#CACACE]">
          Blog posts
        </h3>
        <button className="bg-yellow-100 gap-2 rounded-full px-4 text-black-100 flex cursor-pointer items-center h-[48px] font-medium text-sm group">
          View all posts{' '}
          <div className="bg-black-100 text-yellow-100 p-3 rounded-full transform rotate-[-40deg] transition-transform duration-300 group-hover:rotate-0">
            <FaArrowRight />
          </div>
        </button>{' '}
      </div>
      <p className="w-full md:w-[693px] text-[#8896AB] leading-8">
        Explore cutting-edge ideas, strategies, and innovations powering the
        next generation of intelligent commerce. From AI breakthroughs to
        behavioral science, we share what matters most for future-focused
        brands.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-4">
        {posts.map((post, index) => {
          const date = new Date(post.pubDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return (
            <div
              key={index}
              className="bg-transparent flex flex-col gap-4 rounded shadow py-4"
            >
              <Image
                src={post.thumbnail || defaultImage}
                alt={post.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-[18px] font-medium mb-2">{post.title}</h2>
              <p
                className="text-[#878b9a] text-sm mb-3"
                dangerouslySetInnerHTML={{
                  __html: post.description.substring(0, 70) + '...',
                }}
              />
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DCFC36] text-xs hover:underline"
              >
                Read more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
