const fs = require('fs');

const path = './src/components/AdminPage.tsx';
let content = fs.readFileSync(path, 'utf8');

const injectionStr = `
  const [drinkForm, setDrinkForm] = useState<any>({});
  const [editingDrink, setEditingDrink] = useState<any>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [barSearch, setBarSearch] = useState('');
  const [barFilterCategory, setBarFilterCategory] = useState('All');
  const [IMAGE_PRESETS, setIMAGE_PRESETS] = useState<any>({});
  const isLoading = false;
  const filteredAdminDrinks: any[] = [];
  const handleToggleDrinkStock = () => {};
  const handleDeleteDrink = () => {};
  const handleSaveDrink = () => {};
  const Wine = () => null;
`;

content = content.replace("export default function AdminPage() {", "export default function AdminPage() {" + injectionStr);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed admin types');
