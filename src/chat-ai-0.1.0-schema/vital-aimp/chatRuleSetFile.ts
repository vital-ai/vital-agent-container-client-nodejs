import { FileNode } from '../vital/fileNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChatRuleSetFile
 */
export class ChatRuleSetFile extends FileNode {
  public md5checksum?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChatRuleSetFile';
  }

  /**
   * Get property definitions for ChatRuleSetFile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMd5checksum',
        tsPropertyName: 'md5checksum',
        type: 'string',
        required: false
      }
    ];
  }


}
