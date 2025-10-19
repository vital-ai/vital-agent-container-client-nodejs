import { FilterElement } from './filterElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#TrackingHandle
 */
export class TrackingHandle extends FilterElement {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#TrackingHandle';
  }

  /**
   * Get property definitions for TrackingHandle
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
