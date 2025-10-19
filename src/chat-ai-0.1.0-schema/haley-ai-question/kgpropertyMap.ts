import { VITAL_GraphContainerObject } from '../vital-core/vitalGraphcontainerobject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#KGPropertyMap
 */
export class KGPropertyMap extends VITAL_GraphContainerObject {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#KGPropertyMap';
  }

  /**
   * Get property definitions for KGPropertyMap
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
