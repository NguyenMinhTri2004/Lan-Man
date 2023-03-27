import React, { useState } from "react";
import Link from "next/link";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";
import Modal from "../Modal";

const Header = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-[100]  bg-black-primary text-white font-bold text-base overflow-hidden">
      <Wrapper>
        <div className="flex items-center md:justify-center xs:justify-between w-[93%]">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Picture of the author"
              width={262}
              height={60}
              className="cursor-pointer mr-5"
            />
          </Link>

          <div className="cursor-pointer mx-auto  md:block xs:hidden ">
            <Link href="/">
              <p
                className={` ${
                  router.pathname === "/" ? "text-pink-primary" : "text-white"
                }  no-underline hover:text-pink-primary`}
              >
                TRANG CHỦ
              </p>
            </Link>
          </div>

          <div className="cursor-pointer mx-auto  md:block xs:hidden ">
            <Link href="/blogs">
              <p
                className={` ${
                  router.pathname === "/blogs"
                    ? "text-pink-primary"
                    : "text-white"
                }  no-underline hover:text-pink-primary`}
              >
                BÀI VIẾT
              </p>
            </Link>
          </div>

          <div className="cursor-pointer  mx-auto md:block xs:hidden ">
            <Link href="/about">
              <p
                className={` ${
                  router.pathname === "/about"
                    ? "text-pink-primary"
                    : "text-white"
                }  no-underline hover:text-pink-primary`}
              >
                THÔNG TIN SHOP
              </p>
            </Link>
          </div>

          <div className="cursor-pointer ml-auto  md:block xs:hidden">
            <Button>XEM HOA</Button>
          </div>

          <Image
            src="/images/menu_mobile.svg"
            alt="Picture of the author"
            width={40}
            height={40}
            onClick={() => setOpen(true)}
            className="cursor-pointer md:hidden xs:block mr-5"
          />
        </div>
      </Wrapper>

      {open && (
        <div className="absolute  rounded-xl w-[1/2] -mt-24 z-100 left-0 right-0 block">
          <Modal open={open} setOpen={setOpen}>
            <div className="backdrop-blur-xl rounded-[1em] grid p-10 bg-[#c4c4c42b]">
              <div className="fixed right-5 top-3">
                <Image
                  src="/images/delete-btn.svg"
                  alt="Picture of the author"
                  width={24}
                  height={26}
                  className="cursor-pointer object-contain"
                />
              </div>

              <div className="justify-self-center">
                <Image
                  src="/images/logo-footer.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  className="cursor-pointer object-contain"
                />
              </div>

              <div className="flex ml-5 px-5 mt-8 items-center border-t-0.5 border-radius">
                <Link href="/">
                  <div className="flex">
                    <Image
                      src="/images/arrow.svg"
                      alt="Picture of the author"
                      width={20}
                      height={20}
                      className="cursor-pointer object-contain"
                    />

                    <div className="mr-10 ml-2 active:text-primary-pink text-white cursor-pointer text-sm">
                      TRANG CHỦ
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex ml-5 px-5 mt-8 items-center border-t-0.5 border-radius">
                <Link href="/">
                  <div className="flex">
                    <Image
                      src="/images/arrow.svg"
                      alt="Picture of the author"
                      width={20}
                      height={20}
                      className="cursor-pointer object-contain"
                    />

                    <div className="mr-10 ml-2 active:text-primary-pink text-white cursor-pointer text-sm">
                      BÀI VIẾT
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex ml-5 px-5 mt-8 items-center border-t-0.5 border-radius">
                <Link href="/">
                  <div className="flex">
                    <Image
                      src="/images/arrow.svg"
                      alt="Picture of the author"
                      width={20}
                      height={20}
                      className="cursor-pointer object-contain"
                    />

                    <div className="mr-10 ml-2 active:text-primary-pink text-white cursor-pointer text-sm">
                      THÔNG TIN SHOP
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Header;
