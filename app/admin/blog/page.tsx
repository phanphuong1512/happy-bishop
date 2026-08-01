"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash2, LogOut, ArrowLeft, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";

export default function AdminBlogManagementPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any | null>(null);
  const [toastMsg, setToastMsg] = useState<{ text: string; isError?: boolean } | null>(null);

  // Form fields state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    date: "",
    summary: "",
    coverImage: "",
    content: "",
    recapLinkText: "",
    recapLinkTargetSlug: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formErrorMsg, setFormErrorMsg] = useState("");

  const showToast = (text: string, isError = false) => {
    setToastMsg({ text, isError });
    setTimeout(() => setToastMsg(null), 4000);
  };

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/check-auth");
      if (res.ok) {
        setAuthorized(true);
        fetchBlogs();
      } else {
        router.push("/admin/login");
      }
    } catch {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      if (data.data) {
        setBlogs(data.data);
      }
    } catch (err) {
      console.error("Lỗi tải bài viết:", err);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const openCreateModal = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      slug: `bai-viet-${Date.now()}`,
      date: new Date().toLocaleDateString("vi-VN"),
      summary: "",
      coverImage: "https://assets.happybishops.com/media/blog_1.webp",
      content: "",
      recapLinkText: "",
      recapLinkTargetSlug: "",
    });
    setFormErrorMsg("");
    setModalOpen(true);
  };

  const openEditModal = (post: any) => {
    setEditingPost(post);
    const contentText = Array.isArray(post.content) ? post.content.join("\n\n") : post.content;
    setFormData({
      title: post.title || "",
      slug: post.slug || "",
      date: post.date || "",
      summary: post.summary || "",
      coverImage: post.coverImage || "",
      content: contentText || "",
      recapLinkText: post.recapLink?.text || post.recapLinkText || "",
      recapLinkTargetSlug: post.recapLink?.targetSlug || post.recapLinkTargetSlug || "",
    });
    setFormErrorMsg("");
    setModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Đã xóa bài viết thành công!");
        fetchBlogs();
      } else {
        showToast(data.message || "Xóa bài viết thất bại!", true);
      }
    } catch (err) {
      showToast("Đã xảy ra lỗi kết nối!", true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormErrorMsg("");

    const paragraphs = formData.content.split("\n\n").filter(p => p.trim() !== "");

    const payload = {
      title: formData.title,
      slug: formData.slug,
      date: formData.date,
      summary: formData.summary,
      coverImage: formData.coverImage,
      content: paragraphs,
      recapLinkText: formData.recapLinkText,
      recapLinkTargetSlug: formData.recapLinkTargetSlug,
    };

    try {
      const url = editingPost ? `/api/blogs/${editingPost.id}` : "/api/blogs";
      const method = editingPost ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setModalOpen(false);
        showToast(editingPost ? "Đã cập nhật bài viết!" : "Đã tạo bài viết mới thành công!");
        fetchBlogs();
      } else {
        setFormErrorMsg(data.message || "Đã xảy ra lỗi!");
      }
    } catch (err) {
      setFormErrorMsg("Đã xảy ra lỗi kết nối máy chủ!");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff6e3]">
        <p className="text-base font-bold text-[#8e2b2b] [font-family:var(--font-lexend)]">
          Đang kiểm tra quyền truy cập...
        </p>
      </main>
    );
  }

  if (!authorized) return null;

  return (
    <main className="relative mx-auto mt-4 mb-20 min-h-screen w-[calc(100%-1.2rem)] max-w-[1200px]">
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-bold text-white shadow-xl ${
            toastMsg.isError ? "bg-rose-700" : "bg-emerald-700"
          }`}
        >
          {toastMsg.isError ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
          <span>{toastMsg.text}</span>
        </div>
      )}

      {/* Admin Top Header */}
      <header className="flex items-center justify-between rounded-2xl bg-[#8e2b2b] px-6 py-4 text-white shadow-md">
        <div className="flex items-center gap-3">
          <Image src={logoSrc} alt="Logo" width={40} height={48} className="w-8 h-auto" />
          <h1 className="text-xl font-bold [font-family:var(--font-lexend)]">
            Quản Lý Bài Viết (Admin Blog)
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            target="_blank"
            className="text-xs font-bold text-white/90 hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Xem trang Blog
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-lg bg-white/15 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" /> Đăng xuất
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#8e2b2b] [font-family:var(--font-lexend)]">
            Danh sách bài viết ({blogs.length})
          </h2>
          <div className="flex gap-3">
            <button
              onClick={fetchBlogs}
              className="flex items-center gap-1.5 rounded-xl border border-[#8e2b2b]/30 bg-white px-4 py-2.5 text-xs font-bold text-[#8e2b2b] hover:bg-[#8e2b2b]/5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Làm mới
            </button>
            <button
              type="button"
              onClick={openCreateModal}
              className="flex items-center gap-2 rounded-xl border border-[#c86a6c] bg-linear-to-b from-[#b63d3f] to-[#8f2a2d] px-5 py-2.5 text-xs font-bold text-[#fff6e3] shadow-md hover:brightness-105 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Thêm bài viết mới
            </button>
          </div>
        </div>

        {/* Blogs Grid / Cards */}
        <div className="space-y-4">
          {blogs.map((post) => (
            <div
              key={post.id || post.slug}
              className="flex items-center justify-between gap-6 rounded-2xl border border-[rgba(142,43,43,0.2)] bg-[#fff6e3] p-5 shadow-xs max-[680px]:flex-col max-[680px]:items-start"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border border-[rgba(142,43,43,0.15)] bg-gray-100">
                  <Image
                    src={post.coverImage || logoSrc}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-[#8e2b2b]/10 px-2 py-0.5 text-[10px] font-bold text-[#8e2b2b]">
                      ID: {post.id || "Món tĩnh"}
                    </span>
                    <span className="text-xs text-[#8e2b2b]/70 font-semibold">{post.date}</span>
                  </div>
                  <h3 className="mt-1 text-base font-bold text-[#8e2b2b] [font-family:var(--font-lexend)]">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#8e2b2b]/60 font-mono mt-0.5">/blog/{post.slug}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => openEditModal(post)}
                  className="flex items-center gap-1 rounded-lg border border-amber-600 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 hover:bg-amber-100 transition-colors cursor-pointer"
                >
                  <Edit className="w-3.5 h-3.5" /> Sửa (PUT)
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(post.id)}
                  className="flex items-center gap-1 rounded-lg border border-rose-600 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-800 hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Xóa (DELETE)
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Create / Edit */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[rgba(142,43,43,0.3)] bg-[#fff6e3] p-6 shadow-2xl [font-family:var(--font-lexend)]">
            <div className="flex items-center justify-between border-b border-[rgba(88,10,10,0.15)] pb-4">
              <h3 className="text-xl font-bold text-[#8e2b2b]">
                {editingPost ? "Sửa bài viết (PUT)" : "Thêm bài viết mới (POST)"}
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-gray-500 hover:text-black font-bold text-xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            {formErrorMsg && (
              <div className="mt-4 rounded-xl bg-red-100 p-3 text-xs font-bold text-red-700">
                {formErrorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs font-bold text-[#8e2b2b]">
              <div>
                <label className="block mb-1">Tiêu đề bài viết (*)</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ví dụ: Lộ Diện 36 Đội Tham Gia..."
                  className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white p-2.5 text-sm font-semibold text-[#8e2b2b] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-[530px]:grid-cols-1">
                <div>
                  <label className="block mb-1">Slug URL (*)</label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="tin-tuc-moi-2025"
                    className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white p-2.5 text-sm font-semibold text-[#8e2b2b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1">Ngày đăng</label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="01/03/2025"
                    className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white p-2.5 text-sm font-semibold text-[#8e2b2b] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Ảnh bìa URL (*)</label>
                <input
                  type="text"
                  required
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  placeholder="https://assets.happybishops.com/media/blog_1.webp"
                  className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white p-2.5 text-sm font-semibold text-[#8e2b2b] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1">Tóm tắt ngắn (Summary) (*)</label>
                <textarea
                  required
                  rows={2}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Mô tả tóm tắt nội dung bài viết..."
                  className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white p-2.5 text-sm font-semibold text-[#8e2b2b] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1">Nội dung bài viết (Phân tách các đoạn bằng 2 dòng cách) (*)</label>
                <textarea
                  required
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Đoạn 1...\n\nĐoạn 2...\n\nĐoạn 3..."
                  className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white p-2.5 text-sm font-semibold text-[#8e2b2b] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-[530px]:grid-cols-1">
                <div>
                  <label className="block mb-1">Text link bài viết liên quan (Tùy chọn)</label>
                  <input
                    type="text"
                    value={formData.recapLinkText}
                    onChange={(e) => setFormData({ ...formData, recapLinkText: e.target.value })}
                    placeholder="Xem bài viết bốc thăm..."
                    className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white p-2.5 text-sm font-semibold text-[#8e2b2b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1">Target Slug bài viết liên quan</label>
                  <input
                    type="text"
                    value={formData.recapLinkTargetSlug}
                    onChange={(e) => setFormData({ ...formData, recapLinkTargetSlug: e.target.value })}
                    placeholder="boc-tham-chia-bang-happy-bishops-2025"
                    className="w-full rounded-xl border border-[rgba(142,43,43,0.25)] bg-white p-2.5 text-sm font-semibold text-[#8e2b2b] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[rgba(88,10,10,0.15)]">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-xl border border-gray-400 bg-white px-5 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl border border-[#c86a6c] bg-linear-to-b from-[#b63d3f] to-[#8f2a2d] px-6 py-2.5 text-xs font-bold text-[#fff6e3] hover:brightness-105 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? "Đang lưu..." : editingPost ? "Lưu thay đổi (PUT)" : "Tạo bài viết (POST)"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
