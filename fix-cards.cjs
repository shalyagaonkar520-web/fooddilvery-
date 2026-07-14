const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const target = `                  <div className="w-full h-32 rounded-xl overflow-hidden relative shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {item.isVeg ? (
                      <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-sm flex items-center justify-center shadow-md">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                    ) : (
                      <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-sm flex items-center justify-center shadow-md border border-red-200">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                    )}
                    {item.fires && item.fires > 0 && (
                      <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg text-[10px] font-black text-orange-500 flex items-center gap-1 shadow-sm">
                        🔥 Bestseller
                      </div>
                    )}
                    {item.price < 99 && (
                      <div className="absolute bottom-2 right-2 bg-red-500/90 backdrop-blur-sm px-2 py-0.5 rounded-lg text-[10px] font-black text-white flex items-center gap-1 shadow-sm">
                        % Offer
                      </div>
                    )}

                  </div>
                  
                  <div className="flex-1 py-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 leading-tight pr-6">{item.name}</h3>
                      <div className="flex items-center gap-1 mt-1.5 text-gray-500 text-[10px] font-bold">
                        <Star className="w-3 h-3 fill-orange-500 text-orange-500" />
                        <span className="text-gray-900">4.8</span>
                        <span className="mx-1">•</span>
                        <span>120+ ratings</span>
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between mt-4">
                      <div>
                        <span className="text-lg font-black text-gray-900 tracking-tight">₹{item.price}</span>
                        {item.price < 99 && <span className="ml-2 text-[10px] text-gray-400 line-through">₹{item.price + 50}</span>}
                      </div>
                      
                      <div className="relative">
                        {getQuantity(item.id) === 0 ? (
                          <button
                            onClick={() => handleAdd(item)}
                            className="bg-orange-50 border border-orange-200 text-orange-500 px-6 py-2 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                          >
                            Add <Plus className="w-3 h-3 inline -mt-0.5 ml-1" />
                          </button>
                        ) : (
                          <div className="flex items-center bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/30 overflow-hidden">
                            <button
                              onClick={() => {
                                playSound(SOUNDS.CLICK);
                                updateQuantity(item.id, getQuantity(item.id) - 1);
                              }}
                              className="px-3 py-2 hover:bg-white/20 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-6 text-center font-black text-sm">
                              {getQuantity(item.id)}
                            </span>
                            <button
                              onClick={() => {
                                playSound(SOUNDS.CLICK);
                                updateQuantity(item.id, getQuantity(item.id) + 1);
                              }}
                              className="px-3 py-2 hover:bg-white/20 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors">
                     <Heart className="w-5 h-5" />
                  </button>`;

const replacement = `                  {/* Large edge-to-edge image */}
                  <div className="w-full aspect-[4/3] relative overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    {/* Subtle moving light reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_ease-in-out] pointer-events-none" />
                    
                    {/* Top Right: Favorite icon in glass circle */}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all shadow-lg z-10">
                      <Heart className="w-4 h-4" />
                    </button>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      {item.isVeg ? (
                        <div className="w-5 h-5 bg-white/80 backdrop-blur-md rounded-md flex items-center justify-center shadow-sm border border-white/50">
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-white/80 backdrop-blur-md rounded-md flex items-center justify-center shadow-sm border border-white/50">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        </div>
                      )}
                      {item.fires && item.fires > 0 && (
                        <div className="bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-black text-orange-500 flex items-center gap-1 shadow-sm border border-white/50">
                          🔥 TOP
                        </div>
                      )}
                      {item.price < 99 && (
                        <div className="bg-red-500/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-black text-white flex items-center gap-1 shadow-sm border border-red-400/50">
                          % OFFER
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="flex-1 p-3.5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 leading-tight text-sm line-clamp-2">{item.name}</h3>
                      <div className="flex items-center gap-2 mt-1.5 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-0.5"><Star className="w-3 h-3 fill-orange-500 text-orange-500" /> 4.9</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" /> 15 MIN</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3">
                      <div className="flex flex-col">
                        {item.price < 99 && <span className="text-[9px] text-gray-400 line-through">₹{item.price + 50}</span>}
                        <span className="text-lg font-black text-gray-900 tracking-tight leading-none">₹{item.price}</span>
                      </div>
                      
                      <div className="relative">
                        {getQuantity(item.id) === 0 ? (
                          <button
                            onClick={() => handleAdd(item)}
                            className="bg-black text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-md flex items-center gap-1 shrink-0"
                          >
                            Add <Plus className="w-3 h-3" />
                          </button>
                        ) : (
                          <div className="flex items-center bg-orange-500 text-white rounded-xl shadow-md overflow-hidden h-[34px] shrink-0">
                            <button
                              onClick={() => {
                                playSound(SOUNDS.CLICK);
                                updateQuantity(item.id, getQuantity(item.id) - 1);
                              }}
                              className="px-2.5 h-full hover:bg-white/20 transition-colors flex items-center justify-center"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-5 text-center font-black text-xs">
                              {getQuantity(item.id)}
                            </span>
                            <button
                              onClick={() => {
                                playSound(SOUNDS.CLICK);
                                updateQuantity(item.id, getQuantity(item.id) + 1);
                              }}
                              className="px-2.5 h-full hover:bg-white/20 transition-colors flex items-center justify-center"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>`;

// Replace the inner contents of the motion.div card
code = code.replace(target, replacement);

// Wait, I need to make sure the motion.div classes are updated too.
const oldDivTarget = `className="bg-white rounded-2xl p-3 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col gap-3 relative overflow-hidden group"`;
const newDivTarget = `className="relative bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col"`;

code = code.replace(oldDivTarget, newDivTarget);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
