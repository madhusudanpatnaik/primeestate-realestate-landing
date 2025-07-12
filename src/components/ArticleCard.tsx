import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  excerpt,
  author,
  date,
  category,
  readTime
}) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
            {readTime}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-gray-500 text-sm mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group">
          <span className="font-medium">Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;