import React from 'react'
import {cn} from '../components/header/utils.js'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CardDemo() {

  
  return (
    (
      <div className="container">


        <h1 className="text-2xl text-center">Rolls</h1>
        <span className="absolute top-4 right-4 text-black text-2xl ">
          <Link to="/">Home</Link>
        </span>
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3  ">
      
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://wbcdn.in/assets/img/uploads/mywb/uploads/img_7da6ad49d67349e5fe81ba0df42255eaf7cdb929.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://wbcdn.in/assets/img/uploads/mywb/uploads/img_7da6ad49d67349e5fe81ba0df42255eaf7cdb929.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://wbcdn.in/assets/img/uploads/mywb/uploads/img_7da6ad49d67349e5fe81ba0df42255eaf7cdb929.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Veg Roll
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            55 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://www.recipemasters.in/wp-content/uploads/2014/03/chicken-egg-roll.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://www.recipemasters.in/wp-content/uploads/2014/03/chicken-egg-roll.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://www.recipemasters.in/wp-content/uploads/2014/03/chicken-egg-roll.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Chicken Egg Roll
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
          90 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i.ytimg.com/vi/pMCS1TR4Wyo/maxresdefault.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.ytimg.com/vi/pMCS1TR4Wyo/maxresdefault.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.ytimg.com/vi/pMCS1TR4Wyo/maxresdefault.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Chilly Chicken Roll
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            120 INR
          </p>
        </div>
      </div>


      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://blackandbrownbakers.com/wp-content/uploads/2020/06/Chicken-Italian-Roll.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://blackandbrownbakers.com/wp-content/uploads/2020/06/Chicken-Italian-Roll.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://blackandbrownbakers.com/wp-content/uploads/2020/06/Chicken-Italian-Roll.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-white relative">
            Chicken Italian Roll
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            120 INR
          </p>
        </div>
      </div>


      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://ministryofcurry.com/wp-content/uploads/2019/10/paneer-kathi-rolls-1-850x1275.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://ministryofcurry.com/wp-content/uploads/2019/10/paneer-kathi-rolls-1-850x1275.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://ministryofcurry.com/wp-content/uploads/2019/10/paneer-kathi-rolls-1-850x1275.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Paneer Roll
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            100 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i.pinimg.com/originals/ef/3d/52/ef3d52c67ab18e806c0b09a6e9b5835d.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.pinimg.com/originals/ef/3d/52/ef3d52c67ab18e806c0b09a6e9b5835d.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.pinimg.com/originals/ef/3d/52/ef3d52c67ab18e806c0b09a6e9b5835d.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Egg Roll
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
           65 INR
          </p>
        </div>
      </div>

    </div>


      

     <h1 className="text-2xl text-center">Pizza</h1>
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3  ">
      
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://laurenslatest.com/wp-content/uploads/2021/01/margherita-pizza-recipe-01-1066x1536.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://laurenslatest.com/wp-content/uploads/2021/01/margherita-pizza-recipe-01-1066x1536.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://laurenslatest.com/wp-content/uploads/2021/01/margherita-pizza-recipe-01-1066x1536.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Margherita Pizza
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            199 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.squarespace-cdn.com/content/v1/580a73c320099eeb9bb90e68/1502218388325-O0XGNFS6NHHBOK58TEB4/Pizza-with-mushrooms-tomatoes-and-peppers.JPG)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://images.squarespace-cdn.com/content/v1/580a73c320099eeb9bb90e68/1502218388325-O0XGNFS6NHHBOK58TEB4/Pizza-with-mushrooms-tomatoes-and-peppers.JPG)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[urlhttps://images.squarespace-cdn.com/content/v1/580a73c320099eeb9bb90e68/1502218388325-O0XGNFS6NHHBOK58TEB4/Pizza-with-mushrooms-tomatoes-and-peppers.JPG)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Garden Veg Pizza
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            210 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://alibaik.in/wp-content/uploads/2023/12/vegpizza-9.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://alibaik.in/wp-content/uploads/2023/12/vegpizza-9.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://alibaik.in/wp-content/uploads/2023/12/vegpizza-9.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Mushroom,Onion,Capsicum Pizza
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            220 INR
          </p>
        </div>
      </div>


      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i.pinimg.com/originals/fa/15/5d/fa155d0be811f2b071493389d706c093.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.pinimg.com/originals/fa/15/5d/fa155d0be811f2b071493389d706c093.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.pinimg.com/originals/fa/15/5d/fa155d0be811f2b071493389d706c093.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
           Onion,Corn Pizza
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            190 INR
          </p>
        </div>
      </div>


      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i.pinimg.com/originals/72/b2/14/72b2141e2ca565f2e92a58910fc2afd2.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.pinimg.com/originals/72/b2/14/72b2141e2ca565f2e92a58910fc2afd2.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.pinimg.com/originals/72/b2/14/72b2141e2ca565f2e92a58910fc2afd2.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Paneer,Capsicum,Onion Pizza
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            225 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://www.tasteandtellblog.com/wp-content/uploads/2021/01/BBQ-Chicken-Pizza-4.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://www.tasteandtellblog.com/wp-content/uploads/2021/01/BBQ-Chicken-Pizza-4.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://www.tasteandtellblog.com/wp-content/uploads/2021/01/BBQ-Chicken-Pizza-4.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            BBQ Chicken Pizza
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            250 INR
          </p>
        </div>
      </div>

    </div>

       
      
      
      <h1 className="text-2xl text-center">Rice & Noodles</h1>
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3  ">
      
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i.ytimg.com/vi/5xshVkXD3oE/maxresdefault.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.ytimg.com/vi/5xshVkXD3oE/maxresdefault.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.ytimg.com/vi/5xshVkXD3oE/maxresdefault.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Veg Fried Rice
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            80 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Spicy_Vegetable_Noodles_Recipe-1.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Spicy_Vegetable_Noodles_Recipe-1.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Spicy_Vegetable_Noodles_Recipe-1.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Veg Noodles
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            120 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://1.bp.blogspot.com/-NlrU-L6jZPY/WUynCXGP5sI/AAAAAAAADiY/aA-7knSL7JsEvog1n2_b7uOnxA3afyJMACLcBGAs/s1600/Trial-3.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://1.bp.blogspot.com/-NlrU-L6jZPY/WUynCXGP5sI/AAAAAAAADiY/aA-7knSL7JsEvog1n2_b7uOnxA3afyJMACLcBGAs/s1600/Trial-3.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[urlhttps://1.bp.blogspot.com/-NlrU-L6jZPY/WUynCXGP5sI/AAAAAAAADiY/aA-7knSL7JsEvog1n2_b7uOnxA3afyJMACLcBGAs/s1600/Trial-3.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Egg Rice
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            90 INR
          </p>
        </div>
      </div>


      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://www.justspices.co.uk/media/recipe/Egg-Fried-Noodles_Chinese_Allrounder.webp)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://www.justspices.co.uk/media/recipe/Egg-Fried-Noodles_Chinese_Allrounder.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://www.justspices.co.uk/media/recipe/Egg-Fried-Noodles_Chinese_Allrounder.webp)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Egg Noodles
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            140 INR
          </p>
        </div>
      </div>


      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Chicken Rice
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
           110 INR 
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(http://www.urdupalace.com/wp-content/uploads/2016/11/chicken-noodles.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(http://www.urdupalace.com/wp-content/uploads/2016/11/chicken-noodles.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(http://www.urdupalace.com/wp-content/uploads/2016/11/chicken-noodles.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Chicken Noodles
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            165 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://www.thesouthafrican.com/wp-content/uploads/2020/06/b2c6bacf-chicken-fried-rice-recipe-scaled.jpeg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://www.thesouthafrican.com/wp-content/uploads/2020/06/b2c6bacf-chicken-fried-rice-recipe-scaled.jpeg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://www.thesouthafrican.com/wp-content/uploads/2020/06/b2c6bacf-chicken-fried-rice-recipe-scaled.jpeg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Chicken Egg Rice
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            120 INR
          </p>
        </div>
      </div>

      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://png.pngtree.com/background/20230611/original/pngtree-chicken-egg-noodles-with-vegetables-picture-image_3136988.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://png.pngtree.com/background/20230611/original/pngtree-chicken-egg-noodles-with-vegetables-picture-image_3136988.jpg)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[urlhttps://png.pngtree.com/background/20230611/original/pngtree-chicken-egg-noodles-with-vegetables-picture-image_3136988.jpg)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-black relative">
            Chicken Egg Noodles
          </h1>
          <p className="font-normal text-base text-blue-700 relative my-4">
            199 INR
          </p>
        </div>
      </div>

    </div>




    </div>
    )
  );
}
