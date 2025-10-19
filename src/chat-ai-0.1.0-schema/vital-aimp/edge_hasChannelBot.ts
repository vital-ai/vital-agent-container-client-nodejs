import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasChannelBot
 */
export class Edge_hasChannelBot extends VITAL_TaxonomyEdge {
  public enabled?: boolean;
  public defaultBot?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasChannelBot';
  }

  /**
   * Get property definitions for Edge_hasChannelBot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isEnabled',
        tsPropertyName: 'enabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDefaultBot',
        tsPropertyName: 'defaultBot',
        type: 'boolean',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasChannelBot
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasChannelBot';
  }
}
