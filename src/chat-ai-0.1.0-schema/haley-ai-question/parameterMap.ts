import { VITAL_GraphContainerObject } from '../vital-core/vitalGraphcontainerobject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#ParameterMap
 */
export class ParameterMap extends VITAL_GraphContainerObject {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#ParameterMap';
  }

  /**
   * Get property definitions for ParameterMap
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
