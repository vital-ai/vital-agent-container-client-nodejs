import { KGType } from './kgtype';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSearchType
 */
export class KGSearchType extends KGType {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSearchType';
  }

  /**
   * Get property definitions for KGSearchType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
