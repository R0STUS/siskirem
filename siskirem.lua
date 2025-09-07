Female = {
    BoobSize = 0
}
Female.__index = Female

function Female:new()
    return setmetatable({}, self)
end

Ram = setmetatable({}, { __index = Female })
Ram.__index = Ram

Ram.BoobSize = 2

Rem = setmetatable({}, { __index = Ram })
Rem.__index = Rem

Rem.BoobSize = Ram.BoobSize * 1.5

print("Это сиськи Рем, они больше, чем у Рам. Размер: " .. Rem.BoobSize .. "\nЭто сиськи Рам, они меньше, чем у Рем. Размер: " .. Ram.BoobSize)
