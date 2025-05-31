import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { FiEdit2, FiTrash2, FiPlus, FiUpload, FiCheck } from 'react-icons/fi';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('partners');
  const [partners, setPartners] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [editId, setEditId] = useState(null);

  // Fetch data based on active tab
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        switch (activeTab) {
          case 'partners':
            const { data: partnerData } = await supabase.from('partners').select('*');
            setPartners(partnersData || []);
            break;
          case 'blogs':
            const { data: blogsData } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
            setBlogs(blogsData || []);
            break;
          case 'episodes':
            const { data: episodesData } = await supabase.from('episodes').select('*').order('created_at', { ascending: false });
            setEpisodes(episodesData || []);
            break;
          case 'donations':
            const { data: donationsData } = await supabase.from('donations').select('*').order('date', { ascending: false });
            setDonations(donationsData || []);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let dataToSend = { ...formData };

      // Handle file uploads if needed
      if (formData.logo || formData.image || formData.audio) {
        const file = formData.logo || formData.image || formData.audio;
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${activeTab}/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('dashboard-uploads')
          .upload(filePath, file);
        
        if (uploadError) throw uploadError;
        
        const { data: { publicUrl } } = supabase.storage
          .from('dashboard-uploads')
          .getPublicUrl(filePath);
        
        if (activeTab === 'partners') dataToSend.logo = publicUrl;
        if (activeTab === 'blogs') dataToSend.image = publicUrl;
        if (activeTab === 'episodes') dataToSend.audio_url = publicUrl;
      }

      // Insert or update based on editId
      if (editId) {
        const { error } = await supabase
          .from(activeTab)
          .update(dataToSend)
          .eq('id', editId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from(activeTab)
          .insert([dataToSend]);
        if (error) throw error;
      }

      // Reset form and refresh data
      setFormData({});
      setEditId(null);
      const { data } = await supabase.from(activeTab).select('*');
      if (activeTab === 'partners') setPartners(data);
      if (activeTab === 'blogs') setBlogs(data);
      if (activeTab === 'episodes') setEpisodes(data);
      if (activeTab === 'donations') setDonations(data);
    } catch (error) {
      console.error('Error saving data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const { error } = await supabase
          .from(activeTab)
          .delete()
          .eq('id', id);
        if (error) throw error;
        
        // Refresh data
        const { data } = await supabase.from(activeTab).select('*');
        if (activeTab === 'partners') setPartners(data);
        if (activeTab === 'blogs') setBlogs(data);
        if (activeTab === 'episodes') setEpisodes(data);
        if (activeTab === 'donations') setDonations(data);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'partners':
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Website URL</label>
              <input
                type="url"
                name="url"
                value={formData.url || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Logo</label>
              <input
                type="file"
                name="logo"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                accept="image/*"
              />
              {formData.logo && typeof formData.logo === 'string' && (
                <img src={formData.logo} alt="Current logo" className="mt-2 h-20" />
              )}
            </div>
          </>
        );
      case 'blogs':
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title*</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Content*</label>
              <textarea
                name="content"
                value={formData.content || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg h-32"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Featured Image</label>
              <input
                type="file"
                name="image"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                accept="image/*"
              />
              {formData.image && typeof formData.image === 'string' && (
                <img src={formData.image} alt="Current image" className="mt-2 h-20" />
              )}
            </div>
          </>
        );
      case 'episodes':
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title*</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg h-32"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Audio File*</label>
              <input
                type="file"
                name="audio"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                accept="audio/*"
                required={!editId}
              />
              {formData.audio_url && (
                <audio controls src={formData.audio_url} className="mt-2 w-full" />
              )}
            </div>
          </>
        );
      case 'donations':
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Donor Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Amount*</label>
              <input
                type="number"
                name="amount"
                value={formData.amount || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <select
                name="method"
                value={formData.method || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Select method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="PayPal">PayPal</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderTable = () => {
    const data = activeTab === 'partners' ? partners :
                 activeTab === 'blogs' ? blogs :
                 activeTab === 'episodes' ? episodes :
                 donations;

    if (loading) return <div className="text-center py-8">Loading...</div>;
    if (!data || data.length === 0) return <div className="text-center py-8">No data found</div>;

    switch (activeTab) {
      case 'partners':
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {partners.map((partner) => (
                <tr key={partner.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {partner.logo && <img src={partner.logo} alt={partner.name} className="h-10" />}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{partner.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {partner.url}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(partner)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(partner.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'blogs':
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {blog.image && <img src={blog.image} alt={blog.title} className="h-10" />}
                  </td>
                  <td className="px-6 py-4">{blog.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'episodes':
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {episodes.map((episode) => (
                <tr key={episode.id}>
                  <td className="px-6 py-4">{episode.title}</td>
                  <td className="px-6 py-4 max-w-xs truncate">{episode.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(episode.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(episode)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(episode.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'donations':
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${donation.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(donation.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(donation)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(donation.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Content Management Dashboard</h1>
        
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'partners' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('partners')}
          >
            Partners
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'blogs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('blogs')}
          >
            Blogs
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'episodes' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('episodes')}
          >
            Podcast Episodes
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'donations' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('donations')}
          >
            Donations
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editId ? `Edit ${activeTab.slice(0, -1)}` : `Add New ${activeTab.slice(0, -1)}`}
          </h2>
          <form onSubmit={handleSubmit}>
            {renderForm()}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    {editId ? <FiCheck className="mr-2" /> : <FiPlus className="mr-2" />}
                    {editId ? 'Update' : 'Add'}
                  </>
                )}
              </button>
              {editId && (
                <button
                  type="button"
                  onClick={() => {
                    setFormData({});
                    setEditId(null);
                  }}
                  className="ml-4 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          </div>
          <div className="overflow-x-auto">
            {renderTable()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;