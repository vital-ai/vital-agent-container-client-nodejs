import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyGraphContainerProxy
 */
export class HaleyGraphContainerProxy extends VITAL_Node {
  public graphProxyURIList?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyGraphContainerProxy';
  }

  /**
   * Get property definitions for HaleyGraphContainerProxy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasGraphProxyURIList',
        tsPropertyName: 'graphProxyURIList',
        type: 'string',
        required: false
      }
    ];
  }


}
