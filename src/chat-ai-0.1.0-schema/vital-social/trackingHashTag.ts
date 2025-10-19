import { FilterElement } from './filterElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#TrackingHashTag
 */
export class TrackingHashTag extends FilterElement {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#TrackingHashTag';
  }

  /**
   * Get property definitions for TrackingHashTag
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
