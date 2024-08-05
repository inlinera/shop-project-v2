//COMPONENTS
import { FilterTemplate } from '@/shared/ui/filterTemplate/index'
import { FilterItemTemplate } from '@/shared/ui/filterItemTemplate/index'
//DATA
import { types } from '@/shared/data/types'

export const Sort = () => {
  return (
    <div>
        <FilterTemplate>
            {types?.map(t => 
          <FilterItemTemplate key={t.name} typeInfo={t.name}>
                {t.name}
            </FilterItemTemplate>
            )}
        </FilterTemplate>
    </div>
  )
}
