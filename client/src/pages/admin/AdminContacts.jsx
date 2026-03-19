import { useState, useEffect, Fragment } from 'react';
import api from '../../lib/api';

export default function AdminContacts() {
  const [list, setList] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    api.get('/contact').then(setList).catch(() => setList([]));
  }, []);

  const markRead = async (id) => {
    await api.patch(`/contact/${id}/read`, { read: true });
    setList((prev) => prev.map((c) => (c._id === id ? { ...c, read: true } : c)));
  };

  const toggleExpand = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Contact Submissions</h1>
      <div className="rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="p-4 text-neutral-400 font-medium text-sm">Name</th>
              <th className="p-4 text-neutral-400 font-medium text-sm">Email</th>
              <th className="p-4 text-neutral-400 font-medium text-sm hidden md:table-cell">Subject</th>
              <th className="p-4 text-neutral-400 font-medium text-sm hidden sm:table-cell">Date</th>
              <th className="p-4 text-neutral-400 font-medium text-sm">Status</th>
              <th className="p-4 text-neutral-400 font-medium text-sm">Message</th>
            </tr>
          </thead>
          <tbody>
            {list.map((c) => (
              <Fragment key={c._id}>
                <tr key={c._id} className={`border-b border-white/5 hover:bg-white/5 transition ${!c.read ? 'bg-[#00D4FF]/5' : ''}`}>
                  <td className="p-4 text-white font-medium">{c.name}</td>
                  <td className="p-4 text-neutral-300 text-sm">
                    <a href={`mailto:${c.email}`} className="hover:text-[#00D4FF] transition">{c.email}</a>
                  </td>
                  <td className="p-4 text-neutral-300 text-sm hidden md:table-cell">{c.subject || '—'}</td>
                  <td className="p-4 text-neutral-500 text-sm hidden sm:table-cell">{new Date(c.createdAt).toLocaleDateString()}</td>
                  <td className="p-4">
                    {!c.read ? (
                      <button type="button" onClick={() => markRead(c._id)} className="text-[#00D4FF] text-xs font-medium bg-[#00D4FF]/10 px-2.5 py-1 rounded-md hover:bg-[#00D4FF]/20 transition">
                        Mark read
                      </button>
                    ) : (
                      <span className="text-neutral-500 text-xs">Read</span>
                    )}
                  </td>
                  <td className="p-4">
                    {c.message && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(c._id)}
                        className="text-neutral-400 text-xs hover:text-white transition"
                      >
                        {expanded === c._id ? '▲ Hide' : '▼ View'}
                      </button>
                    )}
                  </td>
                </tr>
                {expanded === c._id && (
                  <tr className="border-b border-white/5 bg-white/3">
                    <td colSpan={6} className="px-6 py-4">
                      <div className="text-sm text-neutral-300 whitespace-pre-wrap bg-white/5 rounded-lg p-4 border border-white/10 leading-relaxed">
                        {c.message}
                      </div>
                      {c.company && <p className="mt-2 text-xs text-neutral-500">Company: <span className="text-neutral-400">{c.company}</span></p>}
                      {c.phone && <p className="mt-1 text-xs text-neutral-500">Phone: <span className="text-neutral-400">{c.phone}</span></p>}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        {list.length === 0 && <p className="p-8 text-neutral-500 text-center">No submissions yet.</p>}
      </div>
      <p className="mt-4 text-xs text-neutral-500">{list.filter(c => !c.read).length} unread submission{list.filter(c => !c.read).length !== 1 ? 's' : ''}</p>
    </div>
  );
}
