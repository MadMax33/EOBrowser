import L from 'leaflet'
import '../components/ext/leaflet-tilelayer-wmts-src'
import moment from 'moment'

export function getProba() {
  return L.tileLayer.wmts('https://proba-v-mep.esa.int/applications/geo-viewer/app/mapcache/wmts',
      {
        crs: L.CRS.EPSG4326,
        layer: 'PROBAV_S1_TOC_1KM_COLOR',
        style: "default",
        name: 'proba-v',
        tilematrixSet: "g",
        time: '2016-03-03',
        zIndex: 4,
        maxZoom: 8,
        additionalParams: {
          layers: ['PROBAV_S1_TOC_1KM_COLOR', 'PROBAV_S1_TOC_1KM_NDVI', 'PROBAV_S1_TOA_1KM_COLOR', 'PROBAV_S1_TOA_1KM_NDVI'],
          dateRange: ["2013-10-16", moment().subtract(2, 'days').format("YYYY-MM-DD")],
          prettyName: 'Proba-V',
          previewPrefix: 'http://finder.eocloud.eu/files'
        },
      }
    )
}