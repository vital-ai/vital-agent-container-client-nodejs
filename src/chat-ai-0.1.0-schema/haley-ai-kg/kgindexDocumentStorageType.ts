import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentStorageType
 */
export class KGIndexDocumentStorageType extends VITAL_Node {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentStorageType';
  }

  /**
   * Get property definitions for KGIndexDocumentStorageType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
