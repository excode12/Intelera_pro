import { useState } from 'react';
import api from '../../lib/api';

export default function AdminSettings() {
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [pwStatus, setPwStatus] = useState('');
  const [pwError, setPwError] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPwError('');
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPwError('New passwords do not match.');
      return;
    }
    if (passwordForm.newPassword.length < 8) {
      setPwError('Password must be at least 8 characters.');
      return;
    }
    setPwStatus('saving');
    try {
      await api.patch('/auth/password', {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });
      setPwStatus('success');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setPwStatus('');
      setPwError(err.message || 'Failed to update password.');
    }
  };

  const clearPopupDismissal = () => {
    try { localStorage.removeItem('intelera_exit_dismissed'); } catch (_) { }
    alert('Exit-intent popup will show again on next visit.');
  };

  const inputCls = 'w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 outline-none transition placeholder-neutral-600';
  const labelCls = 'block text-sm font-medium text-neutral-300 mb-1.5';

  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-2xl font-bold text-white mb-8">Settings</h1>

      {/* Site info */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
        <h2 className="text-lg font-semibold text-white">Site Info</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-neutral-400">Company</dt>
            <dd className="text-white font-medium">Intelera Security</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-neutral-400">Contact email</dt>
            <dd className="text-white">contact@intelera.com</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-neutral-400">Location</dt>
            <dd className="text-white">Monrovia, Liberia</dd>
          </div>
        </dl>
      </div>

      {/* Change password */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h2 className="text-lg font-semibold text-white mb-5">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className={labelCls}>Current password</label>
            <input
              id="currentPassword"
              type="password"
              required
              value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
              className={inputCls}
              placeholder="••••••••"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className={labelCls}>New password</label>
            <input
              id="newPassword"
              type="password"
              required
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
              className={inputCls}
              placeholder="Min 8 characters"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className={labelCls}>Confirm new password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
              className={inputCls}
              placeholder="Repeat new password"
            />
          </div>
          {pwError && <p className="text-red-400 text-sm">{pwError}</p>}
          {pwStatus === 'success' && <p className="text-emerald-400 text-sm">Password updated successfully.</p>}
          <button
            type="submit"
            disabled={pwStatus === 'saving'}
            className="px-5 py-2.5 rounded-lg bg-[#00D4FF] text-[#0B1C2D] font-semibold text-sm disabled:opacity-50 hover:bg-[#00b8e6] transition"
          >
            {pwStatus === 'saving' ? 'Saving…' : 'Update password'}
          </button>
        </form>
      </div>

      {/* Danger zone */}
      <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
        <h2 className="text-lg font-semibold text-red-400 mb-3">Danger Zone</h2>
        <p className="text-neutral-400 text-sm mb-4">Reset the exit-intent popup dismissal so it shows again on the next visitor session.</p>
        <button
          type="button"
          onClick={clearPopupDismissal}
          className="px-4 py-2 rounded-lg border border-red-400/40 text-red-400 text-sm hover:bg-red-400/10 transition"
        >
          Reset popup dismissal
        </button>
      </div>
    </div>
  );
}
