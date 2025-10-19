import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Chart
 */
export class Chart extends Card {
  public chartOptions?: string;
  public chartType?: string;
  public chartData?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Chart';
  }

  /**
   * Get property definitions for Chart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChartOptions',
        tsPropertyName: 'chartOptions',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChartType',
        tsPropertyName: 'chartType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChartData',
        tsPropertyName: 'chartData',
        type: 'string',
        required: false
      }
    ];
  }


}
