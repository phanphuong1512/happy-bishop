"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, ArrowLeft } from "lucide-react";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin/blog");
      } else {
        setErrorMsg(data.message || "Tài khoản hoặc mật khẩu không đúng!");
      }
    } catch (err) {
      setErrorMsg("Đã xảy ra lỗi kết nối!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#fff6e3] p-4">
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#8e2b2b] hover:text-[#f78181] transition-colors [font-family:var(--font-lexend)]"
        >
          <ArrowLeft className="w-4 h-4" /> Trang chủ
        </Link>
      </div>

      <div className="w-full max-w-md rounded-3xl border border-[rgba(142,43,43,0.2)] bg-[#fff6e3] p-8 shadow-xl">
        <div className="flex flex-col items-center text-center">
          <Image
            src={logoSrc}
            alt="Happy Bishops Logo"
            width={70}
            height={82}
            className="w-14 h-auto"
            priority
          />
          <h1 className="mt-4 text-[26px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b]">
            Đăng nhập Quản Trị
          </h1>
          <p className="mt-1 text-sm [font-family:var(--font-source-serif-4)] italic text-[#580a0a]">
            Vui lòng nhập tài khoản admin để quản lý nội dung
          </p>
        </div>

        {errorMsg && (
          <div className="mt-4 rounded-xl bg-red-100 p-3 text-center text-xs font-bold text-red-700 [font-family:var(--font-lexend)]">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-4 [font-family:var(--font-lexend)]">
          <div>
            <label className="block text-xs font-bold text-[#8e2b2b] uppercase tracking-wider mb-1.5">
              Tài khoản
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#8e2b2b]/60">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập tên tài khoản"
                className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white py-2.5 pl-10 pr-4 text-sm font-semibold text-[#8e2b2b] placeholder-[#8e2b2b]/40 focus:border-[#8e2b2b] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#8e2b2b] uppercase tracking-wider mb-1.5">
              Mật khẩu
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#8e2b2b]/60">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white py-2.5 pl-10 pr-4 text-sm font-semibold text-[#8e2b2b] placeholder-[#8e2b2b]/40 focus:border-[#8e2b2b] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center rounded-xl border border-[#c86a6c] bg-linear-to-b from-[#b63d3f] via-[#a43638] to-[#8f2a2d] py-3 text-base font-bold text-[#fff6e3] shadow-md hover:brightness-105 active:translate-y-[1px] disabled:opacity-50 transition-all cursor-pointer"
          >
            {loading ? "Đang xử lý..." : "Đăng nhập →"}
          </button>
        </form>
      </div>
    </main>
  );
}
