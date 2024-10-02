import React from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Tiktok,
} from "../../../../public/hotCategories";

export const SocialNetworksFooter: React.FC = () => {
  return (
    <div className="w-full flex justify-center gap-4 mt-8 md:mt-12">
      <a href="facebook.com" target="_blank">
        <Facebook />
      </a>
      <a href="linkedin.com" target="_blank">
        <Linkedin />
      </a>
      <a href="twitter.com" target="_blank">
        <Twitter />
      </a>
      <a href="instagram.com" target="_blank">
        <Instagram />
      </a>
      <a href="youtube.com" target="_blank">
        <Youtube />
      </a>
      <a href="tiktok.com" target="_blank">
        <Tiktok />
      </a>
    </div>
  );
};
