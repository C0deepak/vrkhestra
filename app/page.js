import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRightCircle, Heart, ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="w-full relative">
        <img src="/img/banner.jpeg" alt="" className="w-full" />
        <div className="absolute bottom-8 right-8 bg-white/30 flex items-center gap-2 text-white px-4 py-2 rounded-3xl">
          <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
          <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
        </div>
      </div>

      <div className="flex items-ceter gap-12 px-8 py-6 bg-black border-t-2 border-b-2 border-red-500">
        <div className="w-40 flex items-center"><img src="/img/logo/1.png" alt="" className="w-full" /></div>
        <div className="w-40 flex items-center"><img src="/img/logo/2.png" alt="" className="w-full" /></div>
        <div className="w-40 flex items-center"><img src="/img/logo/3.png" alt="" className="w-full" /></div>
        <div className="w-40 flex items-center"><img src="/img/logo/1.png" alt="" className="w-full" /></div>
        <div className="w-40 flex items-center"><img src="/img/logo/2.png" alt="" className="w-full" /></div>
        <div className="w-40 flex items-center"><img src="/img/logo/3.png" alt="" className="w-full" /></div>
        <div className="w-40 flex items-center"><img src="/img/logo/1.png" alt="" className="w-full" /></div>
        <div className="w-40 flex items-center"><img src="/img/logo/2.png" alt="" className="w-full" /></div>
        <div className="w-40 flex items-center"><img src="/img/logo/3.png" alt="" className="w-full" /></div>
      </div>

      <div className="flex gap-8 px-8 py-16 text-white">
        <div className="w-40 h-[400px]">
          <div className="w-full h-full rounded-full shadow-lg shadow-red-500/70 overflow-hidden"><img src="/img/category/1.jpg" alt="" className="w-full h-full" /></div>
          <p className="p-2 uppercase font-semibold text-center">X-men appoclypse</p>
        </div>
        <div className="w-40 h-[400px] mt-20">
          <div className="w-full h-full rounded-full shadow-lg shadow-red-500/70 overflow-hidden"><img src="/img/category/2.jpg" alt="" className="w-full h-full" /></div>
          <p className="p-2 uppercase font-semibold text-center">X-men appoclypse</p>
        </div>
        <div className="w-40 h-[400px]">
          <div className="w-full h-full rounded-full shadow-lg shadow-red-500/70 overflow-hidden"><img src="/img/category/3.jpg" alt="" className="w-full h-full" /></div>
          <p className="p-2 uppercase font-semibold text-center">X-men appoclypse</p>
        </div>
        <div className="w-40 h-[400px] mt-20">
          <div className="w-full h-full rounded-full shadow-lg shadow-red-500/70 overflow-hidden"><img src="/img/category/4.jpg" alt="" className="w-full h-full" /></div>
          <p className="p-2 uppercase font-semibold text-center">X-men appoclypse</p>
        </div>
        <div className="w-40 h-[400px]">
          <div className="w-full h-full rounded-full shadow-lg shadow-red-500/70 overflow-hidden"><img src="/img/category/5.jpg" alt="" className="w-full h-full" /></div>
          <p className="p-2 uppercase font-semibold text-center">X-men appoclypse</p>
        </div>
        <div className="w-40 h-[400px] mt-20">
          <div className="w-full h-full rounded-full shadow-lg shadow-red-500/70 overflow-hidden"><img src="/img/category/6.jpg" alt="" className="w-full h-full" /></div>
          <p className="p-2 uppercase font-semibold text-center">X-men appoclypse</p>
        </div>
        <div className="w-40 h-[400px]">
          <div className="w-full h-full rounded-full shadow-lg shadow-red-500/70 overflow-hidden"><img src="/img/category/7.jpg" alt="" className="w-full h-full" /></div>
          <p className="p-2 uppercase font-semibold text-center">X-men appoclypse</p>
        </div>
        <div className="w-40 h-[400px] mt-20">
          <div className="w-full h-full rounded-full shadow-lg shadow-red-500/70 overflow-hidden"><img src="/img/category/8.webp" alt="" className="w-full h-full" /></div>
          <p className="p-2 uppercase font-semibold text-center">X-men appoclypse</p>
        </div>
      </div>

      <div className="px-8 py-16 my-4 relative bg-black h-96 bg-[url('/img/bg.jpg')] bg-cover bg-center">
        <img src="/img/wt.png" alt="" className="absolute top-0 left-0 w-full" />
        <img src="/img/wb.png" alt="" className="absolute -bottom-2 left-0 w-full" />
      </div>

      <div className="flex flex-col gap-8 px-8 py-4 text-white uppercase">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Recomended movies</p>
          <p className="flex items-center gap-2 text-red-500">View More <ArrowRightCircle /></p>
        </div>

        <div className="flex gap-8">
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/1.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/2.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/3.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/4.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/5.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 p-8 text-white uppercase">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Category</p>
          <p className="flex items-center gap-2 text-red-500">View More <ArrowRightCircle /></p>
        </div>

        <div className="flex gap-8">
          <div className="h-40 flex gap-8 items-center p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/1.jpg" alt="" className="w-40 h-full rounded-3xl" />
            <p className="text-center pr-8">The Gunk</p>
          </div>
          <div className="h-40 flex gap-8 items-center p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/2.jpg" alt="" className="w-40 h-full rounded-3xl" />
            <p className="text-center pr-8">The Gunk</p>
          </div>
          <div className="h-40 flex gap-8 items-center p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/3.jpg" alt="" className="w-40 h-full rounded-3xl" />
            <p className="text-center pr-8">The Gunk</p>
          </div>
          <div className="h-40 flex gap-8 items-center p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/4.jpg" alt="" className="w-40 h-full rounded-3xl" />
            <p className="text-center pr-8">The Gunk</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-8 py-4 text-white uppercase">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Offers</p>
          <p className="flex items-center gap-2 text-red-500">View More <ArrowRightCircle /></p>
        </div>

        <div className="flex gap-8">
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/1.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/2.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/3.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/4.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
          <div className="w-60 p-2 rounded-3xl border border-red-500 uppercase font-semibold bg-neutral-900/90">
            <img src="/img/category/5.jpg" alt="" className="w-full h-60 rounded-3xl" />
            <p className="text-center pt-2">The Gunk</p>
            <p className="text-center pb-2">$ 999/-</p>
            <div className="flex items-center gap-2">
              <p className='py-2 px-4 rounded-full bg-red-500'>Buy now</p>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20} /></div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><Heart size={20} /></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
