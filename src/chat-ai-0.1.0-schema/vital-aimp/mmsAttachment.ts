import { FileNode } from '../vital/fileNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MmsAttachment
 */
export class MmsAttachment extends FileNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#MmsAttachment';
  }

  /**
   * Get property definitions for MmsAttachment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
