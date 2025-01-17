/*
 * @Author: Xu Ning
 * @Date: 2024-02-05 17:08:23
 * @LastEditors: xuning 453594138@qq.com
 * @LastEditTime: 2024-02-28 17:35:56
 * @FilePath: /spx-gui/src/store/modules/backdrop/index.ts
 * @Description:
 */
import { defineStore, storeToRefs } from 'pinia'
import { computed } from 'vue'
import { Backdrop } from '@/class/backdrop'
import { useProjectStore } from '../index'
export const useBackdropStore = defineStore('backdrop', () => {
  const projectStore = useProjectStore()
  const { project } = storeToRefs(projectStore)
  const backdrop = computed(() => {
    return project.value.backdrop
  })

  /**
   * Set current backdrop.
   * @param {Backdrop} back
   */
  function setItem(back: Backdrop) {
    project.value.backdrop = back
  }

  /**
   * Set the zorder of the backdrop.
   * @param zOrder
   */
  function setZOrder(zOrder: Array<string | Object>) {
    backdrop.value.config.zorder = zOrder
  }

  return {
    backdrop,
    setItem,
    setZOrder
  }
})
